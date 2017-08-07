/**
 * Created by liuyiman on 2017/8/2.
 */

// socket 专用的logger
const log = require('./../loggers').socketLog

// user数据表
const userDB = require('./../models/').userInfo

// 解码
const decodeToken = require('./../utils/userInfo').decodeToken
// 时间计算
const moment = require('moment')

const disconnectSocket = function (socket, type, msg, cb) {
    // 10秒后无论如何都断开连接
    let disconnectTimer = setTimeout(function () {
        socket.disconnect(true)
        if (cb) {
            cb()
        }
    }, 10000)
    socket.emit('token_error', {
        type: type,
        msg: msg
    }, (data) => {
        // callback
        clearTimeout(disconnectTimer)
        socket.disconnect(true)
        if (cb) {
            cb()
        }
    })
}


/*
* 错误类型： type
 * type: -1 用户不存在，
 * type: -2 登录过期,
 * type: -3 其他错误
* 成功 Promise -> user_id
* */
module.exports = function (socket, tokenMsg) {

    return new Promise((resolve, reject) => {
        // 检查token，写入表中
        // 判断token 是否过期
        if(tokenMsg.e < moment().unix()){
            // 过期了断开连接
            log.error('token过期', tokenMsg)
            disconnectSocket(socket, -2, 'token is over the time limit', () => {
                reject({
                    type: -2,
                    msg: 'token is over the time limit'
                })
            })
        } else {
            // 未过期，写表
            userDB
                .update({
                    socket_id: socket.id
                },{
                    where: {
                        user_id: tokenMsg.i
                    },
                    fields: ['socket_id']
                })
                .then(function (array) {
                    if(array[0] === 0) {
                        // 没有匹配的user_id，断开连接
                        log.error('没有匹配的user_id，断开连接', tokenMsg)
                        disconnectSocket(socket, -2, 'user do not existed', () => {
                            reject({
                                type: -1,
                                msg: 'user do not existed'
                            })
                        })
                    } else {
                        log.info('连接成功', tokenMsg)
                        resolve(tokenMsg.i)
                    }
                })
                .catch(function (e) {
                    console.log(e)
                    disconnectSocket(socket, -2, 'sql error', () => {
                        reject({
                            type: -3,
                            msg: e
                        })
                    })
                })
        }
    })
}