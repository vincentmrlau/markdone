/**
 * Created by 41389 on 2017/4/24.
 */
"use strict";

const Sequelize = require('sequelize');
const serverConfig = require('./../configs/serverConfig.js');
const fs = require('fs');
const path = require('path');

let db = serverConfig.db;
let sequelize = new Sequelize(
    db.name,
    db.username,
    db.psw,
    {
        host:db.host,
        port:db.port,
        dialect:'mysql'
    }
);

let dbModels = {};

//导入模块
fs
    .readdirSync(__dirname)
    .filter(function (fileDir) {
        return(fileDir != 'index.js');//剔除本文件
    })
    .forEach(function (fileDir , index) {
        let model = sequelize.import(path.join(__dirname , fileDir));
        dbModels[model.name] = model;
        //同步到数据库
        model.sync();
    });

console.log(dbModels)