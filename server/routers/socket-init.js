/**
 * Created by liuyiman on 2017/8/1.
 */

'use strict'

// const checkToken = require('./../middleware/checktoken')

const log = require('./../loggers').socketLog

// 引入事件
const OnSocketConnect = require('./../middleware/on-socket-connect')

const OnSocketDisconnect = require('./../middleware/on-socket-disconnect')

// 七牛router
const qiniuInit = require('./qiniu')

// 解码
const decodeToken = require('./../utils/userInfo').decodeToken

/*
* 初始化每一个socket
* */
module.exports = function (socket, token) {
    let tokenMsg = decodeToken(token)
    log.info('socket connected, token:', token)
    /*
    * 连接
    * */

    /*
    * 七牛
    * */
    qiniuInit(socket, tokenMsg.i)
    /*
     * 绑定用户断开连接事件
     * */
    OnSocketDisconnect(socket, tokenMsg.i)
    /*
    * 检查token
    * 若token失效或用户不存在则通知客户端
    * */
    OnSocketConnect(socket, tokenMsg)
        .then((userId) => {
            // 检查成功
            console.log(userId)

        }, (error) => {
            log.error('检验token错误', error)
        })
        .catch((e) => {
            log.error('检验token错误', e)
        })
}