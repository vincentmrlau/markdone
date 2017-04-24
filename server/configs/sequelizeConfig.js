/**
 * Created by 41389 on 2017/4/23.
 */
"use strict";

let Sequelize = require('sequelize');
let serverConfig = require('./serverConfig.js');


let db = serverConfig.db;
console.log(db);
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

module.exports = sequelize;
