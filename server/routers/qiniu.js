/**
 * Created by liuyiman on 2017/7/31.
 */
'use strict'

// logger
const log = require('./../loggers').socketLog

const qiniu = require('qiniu')
const qiniuConf = require('./../configs/serverConfig').qiniu

const accessKey = qiniuConf.accessKey
const secreKey = qiniuConf.secretKey
const bucket = qiniuConf.bucket

const mac = new qiniu.auth.digest.Mac(accessKey, secreKey)

// 简单上传凭证
const options = {
    scope: bucket,
    expires: 7200
}

let putPolicy = new qiniu.rs.PutPolicy(options)

module.exports = function (socket, userId) {
    socket.on('qiniu_upload_token', (data, cb) => {
        let uploadToken = putPolicy.uploadToken(mac)
        log.info('七牛token',data)
        cb(uploadToken)
    })
}
