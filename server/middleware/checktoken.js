/**
 * Created by liuyiman on 2017/7/10.
 */
'use strict'

// 解码
const decodeToken = require('./../utils/userInfo').decodeToken
// userInfo 数据库操作模块
const userDb = require('./../models/').userInfo;
// 时间计算模块
const moment = require('moment')

/*
* reject
* type: -1 用户不存在，
* type: -2 登录过期,
* type: -3 其他错误
* */
module.exports = function (token) {
    let tokenMsg = decodeToken(token)
    console.log('tokenMsg',tokenMsg)
    return new Promise(function (resolve, reject) {
      // 判断是否过期
        if (tokenMsg.e >= moment().unix()) {
            // 未过期
            // 查找用户
            userDb
                .findOne({
                    where: {
                        user_id: tokenMsg.i
                    }
                })
                .then((project) => {
                    console.log('findOne success')
                    if (project === null) {
                        reject({
                            type: -1
                        })
                    } else {
                        resolve(project)
                    }
                })
                .catch((e) => {
                    console.log(e)
                    reject({
                        type: -3,
                        msg: e
                    })
                })
        } else {
            // 已过期
            console.log('express end')
            reject({
                type: -2
            })
        }
    })
}