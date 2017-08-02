/**
 * Created by liuyiman on 2017/7/21.
 *
 * 初始化socket,
 * 建立一个socket连接
 * 返回socket
 */

import SOCKET_CLIENT from 'socket.io-client'

import {SOCKET_URL} from './config'

/*
* 引入actions
* */
import {
    SOCKET_CONNECT_ERROR,
    SOCKET_CONNECT_SUCCESS,
    SOCKET_DISCONNECT,
    SOCKET_RECONNECT_DOING,
    SOCKET_RECONNECT_FAILED,
    SOCKET_RECONNECT_ERROR,
    SOCKET_RECONNECT_SUCCESS
} from './../main-socket/action'
let socket = SOCKET_CLIENT(SOCKET_URL, {
    autoConnect: false,
    query: {
        token: ''
    }
})

let socketInit = function (dispatch, getStates) {
    // 连接的成功
    socket.on('connect', function () {
        console.log('connect success',getStates())
        dispatch(SOCKET_CONNECT_SUCCESS())
    })
    // 连接错误
    socket.on('connect_error', function (error) {
        console.log('connect_error', error)
        dispatch(SOCKET_CONNECT_ERROR(error))
    })
    // 任何错误
    socket.on('error', function (error) {
        console.log('error:',error)
    })

    // 断开连接
    socket.on('disconnect', function (reason) {
        console.log('disconnect:', reason)
        dispatch(SOCKET_DISCONNECT(reason))
    })

    // 重新连接尝试
    socket.on('reconnect_attempt', function (attemptNumber) {
        console.log('reconnect_attempt:', attemptNumber)
        dispatch(SOCKET_RECONNECT_DOING(attemptNumber))
    })

    // 重新连接
    socket.on('reconnect', function (number) {
        console.log('reconnect', number)
        dispatch(SOCKET_RECONNECT_SUCCESS(number))
    })

    // 重新连接尝试错误
    socket.on('reconnect_error', function (error) {
        console.log('reconnect_error:', error)
        dispatch(SOCKET_RECONNECT_ERROR(error))
    })

    // 重连失败
    socket.on('reconnect_failed', function () {
        console.log('reconnect_failed')
        dispatch(SOCKET_RECONNECT_FAILED())
    })

    // socket
    socket.on('n', function (data) {
        console.log(data)
    })
}

export {socket, socketInit}