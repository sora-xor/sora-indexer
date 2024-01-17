import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const heartbeatReceived =  {
    name: 'ImOnline.HeartbeatReceived',
    /**
     *  A new heartbeat was received from `AuthorityId` \[authority_id\]
     */
    v33: new EventType(
        'ImOnline.HeartbeatReceived',
        v33.AuthorityId
    ),
    /**
     * A new heartbeat was received from `AuthorityId`.
     */
    v42: new EventType(
        'ImOnline.HeartbeatReceived',
        sts.struct({
            authorityId: sts.bytes(),
        })
    ),
}

export const allGood =  {
    name: 'ImOnline.AllGood',
    /**
     *  At the end of the session, no offence was committed.
     */
    v33: new EventType(
        'ImOnline.AllGood',
        sts.unit()
    ),
}

export const someOffline =  {
    name: 'ImOnline.SomeOffline',
    /**
     *  At the end of the session, at least one validator was found to be \[offline\].
     */
    v33: new EventType(
        'ImOnline.SomeOffline',
        sts.array(() => v33.IdentificationTuple)
    ),
    /**
     * At the end of the session, at least one validator was found to be offline.
     */
    v42: new EventType(
        'ImOnline.SomeOffline',
        sts.struct({
            offline: sts.array(() => sts.tuple(() => [v42.AccountId32, v42.Exposure])),
        })
    ),
}
