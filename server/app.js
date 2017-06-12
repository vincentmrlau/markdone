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

// 路径
const RESOLVE_NAME = path.resolve(__dirname)

let app =  express();
//引入路由
const userInfo = require('./routers/userInfo.js');

app.use('/static',express.static('./client/static'));

// 监听
// ssl
const PRIVATE_KEY_DIR = path.join(RESOLVE_NAME, 'ssl', 'private.pem');
const CERTIFICATE_DIR = path.join(RESOLVE_NAME, 'ssl', 'file.crt');
const privateKey = fs.readFileSync(PRIVATE_KEY_DIR, 'utf8');
const certificate = fs.readFileSync(CERTIFICATE_DIR, 'utf8');
const credentials = {
    key: privateKey,
    cert: certificate
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
