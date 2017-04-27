/**
 * markdone server enter
 */
"use strict";

const http = require('http');
const https = require('https');
const express = require('express');


let app =  express();
//引入路由
const userInfo = require('./routers/userInfo.js');

app.use('/static',express.static('./client/static'));




module.exports = app;
