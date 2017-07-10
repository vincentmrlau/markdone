/**
 * Created by liuyiman on 2017/7/10.
 */

'use strict'
const serverConf = require('./../configs/serverConfig')
const moment = require('moment')
const jwt = require('jwt-simple')

/*
* 生成token
* token 三要输
* 1. 过期时间 expires,unix时间戳，超过当前时间则视为过期
* 2. userid
* 3. logins: 登陆次数，每次获token次数加一，次数不符则视为token无效
* {
*   e: unix timestamp,
*   i: user id,
*   l: logins
* }
* */
const EXPIRES = serverConf.userInfo.expires
const jwtSecret = serverConf.userInfo.jwtSecret
module.exports.createToken = function (userid, logins) {
    let prams = {
        e: moment().add(EXPIRES, 'day').unix(),
        i: userid,
        l: logins
    }
    return jwt.encode(prams, jwtSecret)
}

/*
* 解码
* */
module.exports.decodeToken = function (token) {
    return jwt.decode(token, jwtSecret)
}