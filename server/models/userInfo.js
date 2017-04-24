/**
 * Created by 41389 on 2017/4/24.
 */

'use strict';

const Sequelize = require('sequelize');
const sequelize = require('../sequelizeConfig.js');



let User = sequelize.define('userInfo',{
    id:{
        //用户ID
        type:Sequelize.UUID,
        unique:true,
        defaultValue:Sequelize.UUIDV1(),
        primaryKey:true
    },
    openid:{
        //微信登录的openid
        type:Sequelize.STRING,
        allowNull:true
    },
    password:{
        type:Sequelize.STRING,
        allowNull:true
    },
    headshot:{
        //头像地址
        type:Sequelize.STRING(200),
        allowNull:true
    },
    nickname:{
        //昵称
        type:Sequelize.STRING(50),
        allowNull:true
    },
    phone:{
        //手机号码
        type:Sequelize.STRING(20),
        allowNull:true
    },
    email:{
        //电子邮箱
        type:Sequelize.STRING(50),
        allowNull:true
    }
},{

});

modules.exports = User;
