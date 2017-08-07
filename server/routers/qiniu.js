/**
 * Created by liuyiman on 2017/7/31.
 */
/*
 * 客户点emit 一个'qiniu_upload_token'
 * 返回： {
 *  uploadToken: token,
 *  expires: unix time
 * }
 * */
'use strict'

// logger
const log = require('./../loggers').socketLog

// moment
const moment = require('moment')

const qiniu = require('qiniu')
const qiniuConf = require('./../configs/serverConfig').qiniu

const accessKey = qiniuConf.accessKey
const secreKey = qiniuConf.secretKey
const bucket = qiniuConf.bucket

const mac = new qiniu.auth.digest.Mac(accessKey, secreKey)

// 简单上传凭证,有效期一个月
const options = {
    scope: bucket,
    expires: 60 * 60 * 24 * qiniuConf.expires
}

let putPolicy = new qiniu.rs.PutPolicy(options)

module.exports = function (socket, userId) {
    socket.on('qiniu_upload_token', (data, cb) => {
        let uploadToken = putPolicy.uploadToken(mac)
        let expires = moment().add(qiniuConf.expires, 'day').unix()
        log.info('七牛token',data)
        cb({
            uploadToken:uploadToken,
            expires: expires,
            url: qiniuConf.url,
        })
    })
}
