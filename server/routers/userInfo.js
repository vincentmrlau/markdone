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



module.exports = router;

