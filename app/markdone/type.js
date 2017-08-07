/*
* format:
* USER_LOGIN_DOING
* */

// login
export const USER_LOGIN_BEFORE = 'USER_LOGIN_BEFORE'
export const USER_LOGIN_DOING = 'USER_LOGIN_DOING'
export const USER_LOGIN_AFTER = 'USER_LOGIN_AFTER'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

// token status
export const TOKEN_ERROR ='TOKEN_ERROR'

// LOGOUT
export const LOGOUT_DOING = 'LOGOUT_DOING'
export const LOGOUT_FAIL = 'LOGOUT_FAIL'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

// socket初始化
export const SOCKET_BEFORE_INIT = 'SOCKET_BEFORE_INIT'
export const SOCKET_AFTER_INIT = 'SOCKET_AFTER_INIT'
export const SOCKET_ERROR = 'SOCKET_ERROR'

// main socket
export const SOCKET_CONNECT_BEFORT = 'SOCKET_CONNECT_BEFORE'
export const SOCKET_CONNECT_DOING = 'SOCKET_CONNECT_DOING'
export const SOCKET_CONNECT_ERROR = 'SOCKET_CONNECT_ERROR'
export const SOCKET_CONNECT_SUCCESS = 'SOCKET_CONNECT_SUCCESS'
export const SOCKET_CONNECT_TIMEOUT = 'SOCKET_CONNECT_TIMEOUT'
export const SOCKET_CONNECT_DISCONNECT = 'SOCKET_CONNECT_DISCONNECT'

// SOCKET RECONNECT
export const SOCKET_RECONNECT_ATTEMPT = 'SOCKET_RECONNECT_ATTEMPT'
export const SOCKET_RECONNECT_FAIL = 'SOCKET_RECONNECT_FAIL'
export const SOCKET_RECONNECT_SUCCESS = 'SOCKET_RECONNECT_SUCCESS'
export const SOCKET_RECONNECT_ERROR = 'SOCKET_RECONNECT_ERROR'
export const SOCKET_RECONNECT_DOING = 'SOCKET_RECONNECT_D0ING'

// 七牛token
export const QINIU_TOKEN_UNSET = 'QINIU_TOKEN_UNSET'
export const QINIU_TOKEN_FRESH = 'QINIU_TOKEN_FRESH'
export const QINIU_TOKEN_GETTING = 'QINIU_TOKEN_GETTING'
export const QINIU_TOKEN_EXPIRES = 'QINIU_TOKEN_EXPIRES'
export const QINIU_TOKEN_GET_FAIL = 'QINIU_TOKEN_GET_FAIL'