/**
 * Created by liuyiman on 2017/8/1.
 */

const checkToken = require('./../middleware/checktoken')

/*
* 初始化每一个socket
* */
module.exports = function (socket, token) {
    /*
    * 连接
    * */
    console.log('socket connected, token:', token)
    // 检查token
    checkToken(token)
        .then((project)=>{
            console.log('检查token没问题',project)
            socket.emit('n', project)
        }, (error)=>{
            switch (error.type){
                case -1:
                    // 用户不存在
                    console.log('用户不存在：', error, token)
                    break
                case -2:
                    // 登录过期
                    console.log('登录过期：', error, token)
                    break
                case -3:
                    // 其他错误
                    console.log('其他错误', error, token)
                    break
                default:
                    console.log('未定义错误类型', error, token)
            }
        })
        .catch(function (e) {
            // 发生服务器错误

        })
}