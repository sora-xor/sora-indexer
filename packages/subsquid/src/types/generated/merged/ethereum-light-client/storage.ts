import * as stageStorage from '../../stage/ethereum-light-client/storage'
import * as testStorage from '../../test/ethereum-light-client/storage'
import * as devStorage from '../../dev/ethereum-light-client/storage'


export const bestBlock = {
	name: '',
	v52Stage: stageStorage.bestBlock['v52'],
	v52Test: testStorage.bestBlock['v52'],
	v70Dev: devStorage.bestBlock['v70'],
}

export const blocksToPrune = {
	name: '',
	v52Stage: stageStorage.blocksToPrune['v52'],
	v52Test: testStorage.blocksToPrune['v52'],
	v70Dev: devStorage.blocksToPrune['v70'],
}

export const finalizedBlock = {
	name: '',
	v52Stage: stageStorage.finalizedBlock['v52'],
	v52Test: testStorage.finalizedBlock['v52'],
	v70Dev: devStorage.finalizedBlock['v70'],
}

export const networkConfig = {
	name: '',
	v52Stage: stageStorage.networkConfig['v52'],
	v52Test: testStorage.networkConfig['v52'],
	v70Dev: devStorage.networkConfig['v70'],
}

export const headers = {
	name: '',
	v52Stage: stageStorage.headers['v52'],
	v52Test: testStorage.headers['v52'],
	v70Dev: devStorage.headers['v70'],
}

export const headersByNumber = {
	name: '',
	v52Stage: stageStorage.headersByNumber['v52'],
	v52Test: testStorage.headersByNumber['v52'],
	v70Dev: devStorage.headersByNumber['v70'],
}
