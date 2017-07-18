/**
 * Created by liuyiman on 2017/7/13.
 */

import {REGISTER_PHONE_URL, LOGIN_PHONE_URL} from './config'
import {P_WITHOUT_TOKEN_OPT, SOCKET_IO} from './middleware'
import {OBJ_PARSER_URLCODE} from './utils'

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

const SOCKET_CONNECT = function () {
    SOCKET_IO.on('news', function (data) {
        console.log(data)
        SOCKET_IO.emit('my other event', { my: 'data' })
    })
}

export {REGISTER_BY_PHONE, LOGIN_BY_PHONE, SOCKET_CONNECT}