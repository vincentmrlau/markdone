/**
 * Created by 41389 on 2017/4/23.
 * 用户系统
 * 主要处理注册、登录
 */
'use strict';

const crypto = require('crypto');
const serverConfig = require('../configs/serverConfig.js');
const express = require('express');
// userInfo的sequelize module
const userDb = require('./../models/').userInfo;
// userInfo的工具包
const userInfoUtils = require('./../utils/userInfo')

// 创建token的方法
const createToken = userInfoUtils.createToken

let router = express.Router();
//密码加密秘钥
const pswSecret = serverConfig.userInfo.pswSecret;

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
                password: crypto.createHmac('sha256', pswSecret).update(psw).digest('hex'),
                // 注册成功就登录一次
                logins: 1
            }
        })
        .spread(function (data, create) {
            if (create === true) {
                // success
                // 返回token
                let id = data.id
                let logins = data.logins
                let token = createToken(id, logins)
                res.json({
                    code: 'S200',
                    msg: 'login success',
                    data: {
                        token: token
                    }
                })
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

/*
* 手机号码登录
* */
router.post('/loginByPhone', function (req, res, next) {

})

module.exports = router;

