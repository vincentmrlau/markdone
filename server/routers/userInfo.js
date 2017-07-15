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

/*
* 手机号注册
* 接收参数: phone, psw
* 返回json:
* 1. 注册成功： code: 'S200',msg, data: {token}
* 2. 账号存在： code: 'E304', msg
* 3. 数据库错误： code: 'E500',msg
* 4. 缺少手机号码： code: 'E300'
* 5. 缺少密码： code: 'E301'
* */
router.post('/registerByPhone', function (req, res, next) {
    console.log(req.body)
    let phone = req.body.phone,
        psw = req.body.psw
    if ( phone === undefined) {
        res.json({
            code: 'E300',
            msg: 'missed phone number'
        })
        return false
    }
    if ( psw === undefined ) {
        res.json({
            code: 'E301',
            msg: 'missed password'
        })
        return false
    }

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
                let id = data.id,
                    logins = data.logins,
                    token = createToken(id, logins)
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
* 接收参数： phone, psw
* 返回参数：
* 0. 成功： code: 'S200',msg, data: {token}
* 1. 缺少手机号码： 'E300'
* 2. 缺少密码： 'E301'
* 3. 错误的电话号码或者密码： code: 'E302', msg
* */
router.post('/loginByPhone', function (req, res, next) {
    console.log(req.body)
    let phone = req.body.phone,
        psw = req.body.psw
    if ( phone === undefined) {
        res.json({
            code: 'E300',
            msg: 'missed phone number'
        })
        return false
    }
    if ( psw === undefined ) {
        res.json({
            code: 'E301',
            msg: 'missed password'
        })
        return false
    }
    userDb
        .findOne({
            where:{
                phone: phone,
                password: crypto.createHmac('sha256', pswSecret).update(psw).digest('hex')
            }
        })
        .then(function (data) {
            console.log(data)
            if (data === null) {
                // 错误的电话号码或者密码
                res.json({
                    code: 'E302',
                    msg: 'wrong phone number or password'
                })
            } else {
                // 登录次数 + 1
                userDb
                    .update({
                        logins: data.logins + 1
                    }, {
                        where: {
                            user_id: data.user_id
                        }
                    })
                    .then( function (row) {
                        if ( row.length === 0) {
                            // 没有可更新的数据
                            res.json({
                                code: 'E500',
                                msg: 'server logic error'
                            })
                        } else {
                            let token = createToken(data.user_id, data.logins + 1)
                            res.json({
                                code: 'S200',
                                msg: 'success',
                                data: {
                                    token: token
                                }
                            })
                        }
                    })
                    .catch(function (e) {
                        console.log(e)
                        res.json({
                            code: 'E501',
                            msg: 'sql error'
                        })
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

module.exports = router;

