/**
 * Created by liuyiman on 2017/7/21.
 */

import {socket} from '../api/socket-init'

const SET_SOCKET = function (socket) {
    return {
        // type: 'socket',
        // socket
    }
}

const SOCKET_CONNECT = function (token) {
    try {
        socket.io.opts.query.token = token
    }catch (e) {
        console.log(2)
    }
    socket.connect()
}

export {SOCKET_CONNECT}