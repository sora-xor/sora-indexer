import * as stageStorage from '../../stage/erc20-app/storage'
import * as testStorage from '../../test/erc20-app/storage'
import * as devStorage from '../../dev/erc20-app/storage'


export const appAddresses = {
	name: '',
	v52Stage: stageStorage.appAddresses['v52'],
	v52Test: testStorage.appAddresses['v52'],
	v70Dev: devStorage.appAddresses['v70'],
}

export const assetKinds = {
	name: '',
	v52Stage: stageStorage.assetKinds['v52'],
	v52Test: testStorage.assetKinds['v52'],
	v70Dev: devStorage.assetKinds['v70'],
}

export const tokenAddresses = {
	name: '',
	v52Stage: stageStorage.tokenAddresses['v52'],
	v52Test: testStorage.tokenAddresses['v52'],
	v70Dev: devStorage.tokenAddresses['v70'],
}

export const assetsByAddresses = {
	name: '',
	v52Stage: stageStorage.assetsByAddresses['v52'],
	v52Test: testStorage.assetsByAddresses['v52'],
	v70Dev: devStorage.assetsByAddresses['v70'],
}

export const sidechainPrecision = {
	name: '',
	v54Stage: stageStorage.sidechainPrecision['v54'],
	v54Test: testStorage.sidechainPrecision['v54'],
	v70Dev: devStorage.sidechainPrecision['v70'],
}
