/**
 * Created by liuyiman on 2017/7/31.
 */
'use strict'

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

let uploadToken = putPolicy.uploadToken(mac)

console.log(uploadToken)
