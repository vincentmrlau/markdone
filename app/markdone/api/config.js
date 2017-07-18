/**
 * Created by liuyiman on 2017/7/13.
 */

const HOST_NAME = 'http://127.0.0.1:3002'

// socket连接地址
const SOCKET_URL = HOST_NAME

// 手机号码注册接口地址
const REGISTER_PHONE_URL = HOST_NAME + '/user/registerByPhone'
// 手机号码登录接口地址
const LOGIN_PHONE_URL = HOST_NAME + '/user/loginByPhone'

export {
    SOCKET_URL,
    REGISTER_PHONE_URL,
    LOGIN_PHONE_URL
}