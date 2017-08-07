/**
 * Created by liuyiman on 2017/7/13.
 */

import {REGISTER_PHONE_URL, LOGIN_PHONE_URL} from './config'
import {P_WITHOUT_TOKEN_OPT} from './middleware'
import {OBJ_PARSER_URLCODE} from './utils'

import {TOKEN_ERROR} from './../userInfo/actions'

// 手机号注册
const REGISTER_BY_PHONE = function (phone, psw) {
    return fetch(REGISTER_PHONE_URL, {
        ...P_WITHOUT_TOKEN_OPT,
        body: OBJ_PARSER_URLCODE({phone, psw})
    })
        .then((response) => {
            console.log(response)
            if (response.ok) {
                return response.json()
            } else {
                return {error: true}
            }
        })
}

// 手机号登录
const LOGIN_BY_PHONE = function (phone, psw) {
    return fetch(LOGIN_PHONE_URL, {
        ...P_WITHOUT_TOKEN_OPT,
        body: OBJ_PARSER_URLCODE({phone, psw})
    })
        .then((response) => {
            console.log(response)
            if (response.ok) {
                return response.json()
            } else {
                return {error: true}
            }
        })
}

// 登录错误或过期
const SOCKET_TOKEN_INIT = function (socket, dispatch, getStates) {
    socket.on('token_error', (data, fn) => {
        // token错误
        console.log(data)
        let msg = '登录状态校验错误，'
        switch (data.type) {
            case -1:
                // 用户不存在
                msg += '用户不存在。'
                break
            case -2:
                // 登录过期
                msg += '登录状态过期。'
                break
            case -3:
                // 其他错误
                msg += '其他错误。'
                break
            default:
                // 未定义的错误类型
                msg += '未定义的错误类型。'
        }
        dispatch(TOKEN_ERROR(msg))
        fn()
    })
}

export {
    REGISTER_BY_PHONE,
    LOGIN_BY_PHONE,
    SOCKET_TOKEN_INIT
}