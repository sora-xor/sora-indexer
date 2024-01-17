import * as stageStorage from '../../stage/bridge-outbound-channel/storage'
import * as testStorage from '../../test/bridge-outbound-channel/storage'
import * as devStorage from '../../dev/bridge-outbound-channel/storage'


export const interval = {
	name: '',
	v52Stage: stageStorage.interval['v52'],
	v52Test: testStorage.interval['v52'],
	v70Dev: devStorage.interval['v70'],
}

export const messageQueues = {
	name: '',
	v52Stage: stageStorage.messageQueues['v52'],
	v55Stage: stageStorage.messageQueues['v55'],
	v57Stage: stageStorage.messageQueues['v57'],
	v52Test: testStorage.messageQueues['v52'],
	v55Test: testStorage.messageQueues['v55'],
	v57Test: testStorage.messageQueues['v57'],
	v70Dev: devStorage.messageQueues['v70'],
}

export const queuesTotalGas = {
	name: '',
	v52Stage: stageStorage.queuesTotalGas['v52'],
	v52Test: testStorage.queuesTotalGas['v52'],
	v70Dev: devStorage.queuesTotalGas['v70'],
}

export const channelNonces = {
	name: '',
	v52Stage: stageStorage.channelNonces['v52'],
	v52Test: testStorage.channelNonces['v52'],
	v70Dev: devStorage.channelNonces['v70'],
}

export const fee = {
	name: '',
	v52Stage: stageStorage.fee['v52'],
	v52Test: testStorage.fee['v52'],
	v70Dev: devStorage.fee['v70'],
}

export const latestCommitment = {
	name: '',
	v70Dev: devStorage.latestCommitment['v70'],
}
