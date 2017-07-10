/**
 * Created by 41389 on 2017/4/23.
 */
'use strict';

let serverConfig = {
    //数据库设置
    db:{
        name:'markdone',
        username:'markdone',
        psw:'markdone',
        host:'localhost',
        port:'3306'
    },
    userInfo:{
        // 密码秘钥
        pswSecret:'markdone',
        // token秘钥
        jwtSecret:'markdone',
        // 过期时间 天
        expires: 30
    },
    ports: {
        port: 3002,
        ssl: 3003
    },
    sslPsw: 'liu5998577'
}

module.exports = serverConfig;
