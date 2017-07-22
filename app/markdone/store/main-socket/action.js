/**
 * Created by liuyiman on 2017/7/21.
 */

import {socket} from '../api/socket-init'
import io from 'socket.io-client'

const SET_SOCKET = function (socket) {
    return {
        type: 'socket',
        socket
    }
}

const SOCKET_CONNECT = function (token) {
    
}

export {SOCKET_CONNECT}