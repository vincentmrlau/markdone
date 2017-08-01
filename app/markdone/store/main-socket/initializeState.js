/**
 * Created by liuyiman on 2017/7/21.
 */

import * as TYPES from './../../type'

export default {
    socket: '',
    status: TYPES.SOCKET_CONNECT_BEFORT,
    isInit: false,
    initStatus: TYPES.SOCKET_BEFORE_INIT,
    reconnectAttemptNumber: 0
}