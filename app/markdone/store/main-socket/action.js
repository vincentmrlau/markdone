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
        status: TYPES.SOCKET_RECONNECT_SUCCESS,
        msg: '',
    }
}

// 尝试重连
const SOCKET_RECONNECT_DOING = function (number) {
    return {
        type: TYPES.SOCKET_RECONNECT_DOING,
        status: TYPES.SOCKET_RECONNECT_DOING,
        reconnectAttemptNumber: number
    }
}

// 重连错误
const SOCKET_RECONNECT_ERROR = function (msg) {
    return {
        type: TYPES.SOCKET_RECONNECT_ERROR,
        status: TYPES.SOCKET_RECONNECT_ERROR,
        msg: {
            msg:'reconnect error',
            detail: msg
        }
    }
}

// 重连失败
const SOCKET_RECONNECT_FAILED = function () {
    return {
        type: TYPES.SOCKET_RECONNECT_FAIL,
        status: TYPES.SOCKET_RECONNECT_FAIL,
        msg: {
            msg: 'reconnect error'
        }
    }
}

// 重连成功
const SOCKET_RECONNECT_SUCCESS = function (attempt) {
    return{
        type: TYPES.SOCKET_RECONNECT_SUCCESS,
        status: TYPES.SOCKET_RECONNECT_SUCCESS,
        reconnectAttemptNumber:attempt
    }
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
    console.log(token)
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

// 开始连接，调用一次之后，断开会自动连接
const SOCKET_CONNECT = function () {
    return (dispatch) => {
        socket.connect()
        dispatch(SOCKET_CONNECT_DOING())
    }
}

// 断开连接
const SOCKET_DISCONNECT = function (reason) {
    return {
        type: TYPES.SOCKET_CONNECT_DISCONNECT,
        status: TYPES.SOCKET_CONNECT_DISCONNECT,
        msg: {
            msg: 'socket disconnected',
            detail: reason
        }
    }
}

export {
    SOCKET_INIT,
    SOCKET_CONNECT,
    SOCKET_CONNECT_DOING,
    SOCKET_CONNECT_ERROR,
    SOCKET_CONNECT_SUCCESS,
    SOCKET_DISCONNECT,
    // 重连
    SOCKET_RECONNECT_DOING,
    SOCKET_RECONNECT_SUCCESS,
    SOCKET_RECONNECT_ERROR,
    SOCKET_RECONNECT_FAILED
}