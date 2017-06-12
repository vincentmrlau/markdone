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
        // dev  17/04/23
        pswSecret:'markdone',
        jwtSecret:'markdone'
    },
    ports: {
        port: 3002,
        ssl: 3003
    }
}

module.exports = serverConfig;
