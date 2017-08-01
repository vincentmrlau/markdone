/**
 * Created by liuyiman on 2017/7/21.
 */

import {socketInit, socket} from '../api/socket-init'
import * as TYPES from './../../type'

// 第一次连接中
const SOCKET_CONNECT_DOING = function () {
    return {
        type: TYPES.SOCKET_CONNECT_DOING,
        status: TYPES.SOCKET_CONNECT_DOING
    }
}

// 连接错误
const SOCKET_CONNECT_ERROR = function (msg) {
    return {
        type: TYPES.SOCKET_CONNECT_ERROR,
        status: TYPES.SOCKET_CONNECT_ERROR,
        socket: '',
        msg: {
            msg: 'connect error',
            detail: msg
        }
    }
}

// 连接成功
const SOCKET_CONNECT_SUCCESS = function () {
    return {
        type: TYPES.SOCKET_CONNECT_SUCCESS,
        msg: '',
    }
}

// 尝试重连
const SOCKET_RECONNECT_DOING = function (number) {
    return {
        type: TYPES.SOCKET_RECONNECT_DOING,
        reconnectAttemptNumber: number
    }
}

// 重连错误
const SOCKET_RECONNECT_ERROR = function (msg) {
    return {
        type: TYPES.SOCKET_CONNECT_ERROR,
        msg: {
            msg:'reconnect error',
            detail: msg
        }
    }
}

// 重连失败
const SOCKET_RECONNECT_FAILED = function (msg) {
    
}

// 初始化之后的状态
const SOCKET_AFTER_INIT = function (socket) {
    return {
        type: TYPES.SOCKET_AFTER_INIT,
        socket: socket,
        isInit: true,
        initStatus: TYPES.SOCKET_AFTER_INIT
    }
}

// 初始化
const SOCKET_INIT = function (token) {
    return (dispatch, getStates) => {
        socketInit(dispatch,getStates)
        try {
            socket.io.opts.query.token = token
        }catch (e) {
            console.log(e)
        }
        dispatch(SOCKET_AFTER_INIT(socket))
    }
}

// connect
const SOCKET_CONNECT = function () {
    return (dispatch) => {
        console.log('aaa')
        socket.connect()
        dispatch(SOCKET_CONNECT_DOING())
    }
}

export {
    SOCKET_INIT,
    SOCKET_CONNECT,
    SOCKET_CONNECT_DOING,
    SOCKET_CONNECT_ERROR,
    SOCKET_CONNECT_SUCCESS
}