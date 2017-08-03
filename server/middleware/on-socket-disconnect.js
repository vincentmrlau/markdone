/**
 * Created by liuyiman on 2017/8/2.
 */

// socket 专用的logger
const log = require('./../loggers').socketLog

// user数据表
const userDB = require('./../models/').userInfo

module.exports = function (socket, user_id) {
    return new Promise(function (resolve, reject) {
        socket.on('disconnect', function () {
            userDB
                .update({
                    socket_id: null
                }, {
                    where: {
                        user_id: user_id
                    },
                    fields: ['socket_id']
                })
                .then(function (array) {
                    if(array[0] === 1) {
                        // 成功
                        log.info('用户断开连接成功：', user_id)
                        resolve(user_id)
                    } else {
                        // 找不到用户
                        log.error('用户断开连接，但是找不到用户', user_id)
                        reject(user_id, '用户断开连接，但是找不到用户')
                    }
                })
                .catch(function (e) {
                    reject(user_id, e)
                })
        })
    })
}