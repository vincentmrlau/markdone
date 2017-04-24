/**
 * Created by 41389 on 2017/4/23.
 */
'use strict';

const crypto = require('crypto');
const serverConfig = require('../configs/serverConfig.js');
const jwt = require('jwt-simple');

//密码加密秘钥
const pswSecret = serverConfig.userInfo.pswSecret;
const jwtSecret = serverConfig.userInfo.jwtSecret;

