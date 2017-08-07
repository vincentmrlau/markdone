/**
 * Created by liuyiman on 2017/7/21.
 *
 * 初始化socket,
 * 建立一个socket连接
 * 返回socket
 */

import SOCKET_CLIENT from 'socket.io-client'

import {SOCKET_URL} from './config'

// 引入socket时间处理
// 连接相关
import socketConnection from './socket-connection'
// token错误处理
import {SOCKET_TOKEN_INIT} from './login'


let socket = SOCKET_CLIENT(SOCKET_URL, {
    autoConnect: false,
    query: {
        token: ''
    }
})

let socketInit = function (dispatch, getStates) {
    // 注册 socket连接相关的事件
    socketConnection(socket, dispatch, getStates)
    // TOKEN处理
    SOCKET_TOKEN_INIT(socket, dispatch, getStates)
}

export {socket, socketInit}