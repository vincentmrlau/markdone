/**
 * markdone server entry
 */
"use strict";

// 引入库
const http = require('http');
const https = require('https');
const express = require('express');
const fs = require('fs');
const path = require('path');

// 引入配置
const configs = require('./configs/serverConfig.js');
// 服务器监听端口
const PORT = configs.ports.port;
const SSL_PORT = configs.ports.ssl;
// 证书密码
const SSL_PSW = configs.sslPsw

// 路径
const RESOLVE_NAME = path.resolve(__dirname)

let app =  express();
//引入路由
const userInfo = require('./routers/userInfo.js');

app.use('/static',express.static('./client/static'));

//TODO header

// use userInfo
app.use('/user',userInfo)

// 监听
// ssl
const PFX_DIR = path.join(RESOLVE_NAME, 'ssl', 'vincent.pfx');
const pfx = fs.readFileSync(PFX_DIR);
const credentials = {
    pfx:pfx,
    passphrase:SSL_PSW
}

let httpServer = http.createServer(app);
let httpsServer = https.createServer(credentials, app);

httpServer.listen(PORT, function () {
    console.log('http server is running on:', PORT);
});

httpsServer.listen(SSL_PORT, function () {
    console.log('https server is running on:', PORT);
})

module.exports = app;
