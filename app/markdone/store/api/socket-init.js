/**
 * Created by liuyiman on 2017/7/21.
 *
 * 初始化socket,
 * 建立一个socket连接
 * 返回socket
 */

import SOCKET_CLIENT from 'socket.io-client'

import {SOCKET_URL} from './config'

let socket = SOCKET_CLIENT(SOCKET_URL, {
    autoConnect: false,
    query: {
        token: ''
    }
})
socket.on('connect' ,function () {
    console.log('cc')
})

export {socket}