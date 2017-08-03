/**
 * markdone server entry
 */
"use strict";

// 引入logger
const loggers = require('./loggers')
const startLog = loggers.startLog
const debugLog = loggers.debugLog

startLog.info('app start')

// 引入库
const http = require('http')
const https = require('https')
const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const sockteIo = require('socket.io')

// 引入配置
const configs = require('./configs/serverConfig.js')
// 服务器监听端口
const PORT = configs.ports.port
const SSL_PORT = configs.ports.ssl
// socket端口
const SOCKET_PORT = configs.ports.socket
// 证书密码
const SSL_PSW = configs.sslPsw

// 路径
const RESOLVE_NAME = path.resolve(__dirname)

let app =  express()

// 使用中间件
/*
* body 使用 x-www-form-urlencoded
* */
app.use(bodyParser.urlencoded())
/*
* 不支持json！
* */
// app.use(bodyParser.json({}))

/*
* 支持跨域，支持OPTIONS
* */
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    if (req.method == 'OPTIONS') {
        res.send(200)
    } else {
        next()
    }
})

//引入路由
const userInfo = require('./routers/userInfo.js')
// 引入socket配置
const socketInit = require('./routers/socket-init')

// 静态文件路劲
app.use('/static',express.static('./client/static'))


/*
* 路由开始
* */
// use userInfo
app.use('/user',userInfo)

// 监听
// ssl
const PFX_DIR = path.join(RESOLVE_NAME, 'configs', 'vincent4u.cn.pfx')
const pfx = fs.readFileSync(PFX_DIR)
const credentials = {
    pfx:pfx,
    passphrase:SSL_PSW
}

let httpServer = http.createServer(app)
let httpsServer = https.createServer(credentials, app)

/*
 * socket
 * */
let io = sockteIo(httpServer)
io.on('connection', function (socket) {
    console.log(socket.id)
    console.log(socket.handshake.query)
    socketInit(socket, socket.handshake.query.token)
})

httpServer.listen(PORT, function () {
    console.log('http server is running on:', PORT)
})

httpsServer.listen(SSL_PORT, function () {
    console.log('https server is running on:', PORT)
})

module.exports = app
