/**
 * Created by 41389 on 2017/4/24.
 * 用户信息储存
 */

'use strict';
module.exports = function (sequelize,DataTypes) {
    let User = sequelize.define('userInfo',{
        user_id:{
            //用户ID
            type:DataTypes.UUID,
            unique:true,
            defaultValue:DataTypes.UUIDV1(),
            primaryKey:true
        },
        openid:{
            //微信登录的openid
            type:DataTypes.STRING,
            allowNull:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:true
        },
        headshot:{
            //头像地址
            type:DataTypes.STRING(200),
            allowNull:true
        },
        nickname:{
            //昵称
            type:DataTypes.STRING(50),
            allowNull:true
        },
        phone:{
            //手机号码
            type:DataTypes.STRING(20),
            allowNull:true
        },
        email:{
            //电子邮箱
            type:DataTypes.STRING(50),
            allowNull:true
        }
    },{

    });

    return User;
};



