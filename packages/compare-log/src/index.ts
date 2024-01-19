import { ChildProcessWithoutNullStreams, spawn } from 'child_process'
import kill from 'tree-kill'

import lodash from 'lodash'
import chalk from 'chalk'
import * as fs from 'fs'

import * as dotenv from 'dotenv'

dotenv.config()

const { isEqual } = lodash

interface LogDataSubsquid {
  level: number
  time: number
  ns: string
  msg: string
  blockHeight: number
  [key: string]: any
}

interface LogDataSubquery {
  msg: string
  blockHeight: string
  [key: string]: any
}

interface LogData {
  msg: string
  blockHeight: string
  [key: string]: any
}

let subsquidScript: ChildProcessWithoutNullStreams
let subqueryScript: ChildProcessWithoutNullStreams

const logSubsquid: Array<LogData> = []
const logSubquery: Array<LogData> = []
let logIndex = 0

let endBlock = parseInt(process.env.END_BLOCK) || Number.MAX_VALUE
const startBlockSubsquid = parseInt(process.env.START_BLOCK_SUBSQUID) || 0
const startBlockSubquery = parseInt(process.env.START_BLOCK_SUBQUERY) || 0
const stopOnError = process.env.STOP_ON_ERROR ? process.env.STOP_ON_ERROR === 'true' : true
const showProgressSubsquid = process.env.SHOW_PROGRESS_SUBSQUID ? process.env.SHOW_PROGRESS_SUBSQUID === 'true' : true
const showProgressSubquery = process.env.SHOW_PROGRESS_SUBQUERY ? process.env.SHOW_PROGRESS_SUBQUERY === 'true' : true
const saveLog = process.env.SAVE_LOG ? process.env.SAVE_LOG === 'true' : true

const subsquidRegex = /\{"level":\d+,"time":\d+,"ns":"[^"]+","msg":"[^"]+","blockHeight":\d+(?:,"[^"]+":(?:"[^"]+"|\d+))*\}/

const subqueryNewMessageRegex = /[\w\d\-_]+\s+\|\s\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z\s+<sandbox>\s+DEBUG\s([^\n]+)/
const subqueryMessageArgumentRegex = /[\w\d\-_]+\s+\|\s{41}\s+(\w+):\s([^\n]+)/

const colorRegex = /\x1B\[\d+m/g

generateSubsquidScriptAndRun()
setTimeout(generateSubqueryScriptAndRun, 20_000)

let subsquidReady = false
let subqueryReady = false

let subsquidLastLines = ''
let newSubqueryLog: LogDataSubquery = { msg: null, blockHeight: '' }

function generateSubsquidScriptAndRun() {
  let script = 'export INDEXER_ENVIRONMENT=production\n' + 'export INDEXER_START_BLOCK=' + startBlockSubsquid + '\n' + 'export INDEXER_TEST_LOG_MODE=true\n' + 'cd ../subsquid\n' + 'npm run process:clean\n' + 'echo in dev\n'
  fs.writeFile('data/subsquid.sh', script, (e) => {
    subsquidScript = spawn('sh', ['data/subsquid.sh'])

    subsquidScript.stdout.on('data', (data: Buffer) => {
      const dataString = data.toString()
      if (logIndex === 0 && showProgressSubsquid) {
        console.log(chalk.cyan(dataString))
      }
      handleSubsquid(dataString)
    })

    subsquidScript.stderr.on('data', (data: Buffer) => {
      const dataString = data.toString()
      if (logIndex === 0 && showProgressSubsquid) {
        console.log(chalk.cyan(dataString))
      }
      handleSubsquid(dataString)
    })

    subsquidScript.on('close', (code) => {
      console.log(`Subsquid process exited with code ${code}`)
    })
  })
}

function generateSubqueryScriptAndRun() {
  let script =
    'export INDEXER_TEST_LOG_MODE=true\n' + 'cd ../subquery && ls\n' + 'npm run config:chainId:update\n' + 'npm run config:startBlock -- -b='+startBlockSubquery+'\n' + 'npm run process:clean\n'
  fs.writeFile('data/subquery.sh', script, (e) => {
    subqueryScript = spawn('sh', ['data/subquery.sh'])
    
    subqueryScript.stdout.on('data', (data: Buffer) => {
      const dataString = data.toString()
      if (logIndex === 0 && showProgressSubquery) {
        console.log(chalk.blue(dataString))
      }
      handleSubquery(dataString)
    })

    subqueryScript.stderr.on('data', (data: Buffer) => {
      const dataString = data.toString()
      if (logIndex === 0 && showProgressSubquery) {
        console.log(chalk.blue(dataString))
      }
      handleSubquery(dataString)
    })

    subqueryScript.on('close', (code) => {
      console.log(`Subquery process exited with code ${code}`)
    })
  })
}

function handleSubsquid(data: string) {
  if (subsquidReady) return

  function processLine(line: string) {
    let dataJson = JSON.parse(line) as LogDataSubsquid
    delete dataJson.level
    delete dataJson.ns
    delete dataJson.time

    if (dataJson.blockHeight > endBlock) {
      subsquidReady = true
      kill(subsquidScript.pid)
      if (saveLog)
      fs.writeFile('logSubsquid.json', JSON.stringify(logSubsquid, null, 2), (e) => {})
      console.log('Subsquid work finished')
    }
    logSubsquid.push(convertFieldsToString(dataJson) as LogData)
    compare()
  }

  const logLines = [subsquidLastLines, ...(data.split('\n'))]

  logLines.forEach((line, index) => {
    const messageLine = subsquidRegex.exec(line)?.[0]
 
    if (messageLine) {
      processLine(messageLine)
      subsquidLastLines = ''
    } else if (index > 0) {
      subsquidLastLines = subsquidLastLines + line
      const messageLineCombined = subsquidRegex.exec(subsquidLastLines)?.[0]
      if (messageLineCombined) {
        processLine(messageLineCombined)
      }
    }
  })
}

function handleSubquery(data: string) {
  if (subqueryReady) return
  data = data.replaceAll(colorRegex, '')

  const logLines = data.split('\n')

  logLines.forEach(line => {
    const newMessageLine = subqueryNewMessageRegex.exec(line)
    const messageArgumentLine = subqueryMessageArgumentRegex.exec(line)

    if (newMessageLine) {
      if (parseInt(newSubqueryLog.blockHeight) > endBlock) {
        subqueryReady = true
        kill(subqueryScript.pid)
        if (saveLog)
        fs.writeFile('logSubquery.json', JSON.stringify(logSubquery, null, 2), (e) => {})
        console.log('Subquery work finished')
      }
      if (newSubqueryLog.msg !== null) {
        logSubquery.push(newSubqueryLog)
        compare()
      }
      newSubqueryLog = { msg: newMessageLine[1], blockHeight: '' }
    }

    if (messageArgumentLine) {
      newSubqueryLog[messageArgumentLine[1]] = messageArgumentLine[2].trim()
    }
  })
}

function compare() {
  if (logSubquery[logIndex] && logSubsquid[logIndex]) {
    const logSubsquidOnlyString = convertFieldsToString(logSubsquid[logIndex])

    console.log('\n')
    if (isEqual(logSubquery[logIndex], logSubsquidOnlyString)) {
      console.log(chalk.green(printLog(logSubquery[logIndex])))
    } else {
      if (stopOnError) {
        endBlock = parseInt(logSubsquid[logIndex].blockHeight)
      }
      console.error(chalk.magenta(printLog(logSubsquidOnlyString)) + '\n' + chalk.red(printLog(logSubquery[logIndex])))
    }
    logIndex++
  }
}

function convertFieldsToString<T extends Record<string, any>>(obj: T): Record<string, string> {
  const newObj: Record<string, string> = {}

  for (const [key, value] of Object.entries(obj)) {
    newObj[key] = String(value)
  }

  return newObj
}

function printLog(data: Record<string, string>): string {
  return Object.entries(data).map(([key, value]) => {
    if (key === 'msg') {
      return value
    }
    return `${key}: ${value}`
  }).join('\n')
}