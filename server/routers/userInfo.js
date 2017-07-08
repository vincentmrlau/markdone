/**
 * Created by 41389 on 2017/4/23.
 * 用户系统
 * 主要处理注册、登录
 */
'use strict';

const crypto = require('crypto');
const serverConfig = require('../configs/serverConfig.js');
const jwt = require('jwt-simple');
const express = require('express');
const userDb = require('./../models/').userInfo;

let router = express.Router();
//密码加密秘钥
const pswSecret = serverConfig.userInfo.pswSecret;
const jwtSecret = serverConfig.userInfo.jwtSecret;

// register by phone
router.post('/registerByPhone', function (req, res, next) {
    console.log(req.body)
    let phone = req.body.phone
    let psw = req.body.psw
    userDb
        .findOrCreate({
            where: {
                phone: phone
            },
            defaults: {
                phone: phone,
                password: crypto.createHmac('sha256', pswSecret).update(psw).digest('hex')
            }
        })
        .spread(function (data, create) {
            if (create === true) {
                // success
                // 返回token
                let id = data.id

            } else if (create === false) {
                //error
                res.json({
                    code: 'E304',
                    msg: 'phone number is already existed'
                })
            }
        })
        .catch(function (e) {
            console.log(e)
            res.json({
                code: 'E500',
                msg: 'server  error'
            })
        })

})

// login
router.post('/login', function (req, res, next) {
    console.log(req)
    res.json({
        ss:'2'
    })
})

module.exports = router;

