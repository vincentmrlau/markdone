/**
 * Created by liuyiman on 2017/7/21.
 */

import initializeState from './initializeState'
import * as TYPES from './../../type'

let socket = function (state = initializeState, action) {
    switch (action.type) {
        case TYPES.SOCKET_BEFORE_INIT:
            return {
                ...state,
                initStatus: action.initStatus,
                isInit: action.isInit
            }
            break
        case TYPES.SOCKET_AFTER_INIT:
            return {
                ...state,
                initStatus:action.initStatus,
                isInit: action.isInit,
                socket: action.socket
            }
            break
        case TYPES.SOCKET_CONNECT_BEFORT:
            return {
                ...state,
                status: action.status
            }
            break
        case TYPES.SOCKET_CONNECT_DOING:
            return {
                ...state,
                status: action.status
            }
            break
        case TYPES.SOCKET_CONNECT_ERROR:
            return {
                ...state,
                status: action.status,
                msg: action.msg
            }
        default:
            return state
    }
}

export {socket}