/*
* user info actions
* */
import * as TYPES from './../../type.js'
import {REGISTER_BY_PHONE, LOGIN_BY_PHONE } from '../api/login'

import initializeState from './initializeState'

const LOGIN_BEFORE = function () {
    return {
        type: TYPES.USER_LOGIN_BEFORE,
        ...initializeState
    }
}

// login doing
const LOGIN_DOING = function () {
    return {
        type: TYPES.USER_LOGIN_DOING,
        loginStatus: TYPES.USER_LOGIN_DOING,
    }
}
const LOGIN_SUCCESS = function ( data = {} ) {
    return {
        type: TYPES.LOGIN_SUCCESS,
        loginStatus: TYPES.LOGIN_SUCCESS,
        responseData: data
    }
}

const LOGIN_FAIL = function (alertMsg) {
    console.log('LOGIN_FAIL')
    return {
        type: TYPES.USER_LOGIN_FAIL,
        loginStatus: TYPES.USER_LOGIN_FAIL,
        alertMsg
    }
}
const AFTER_LOGIN = function () {
    return {
        type: TYPES.USER_LOGIN_AFTER,
        loginStatus: TYPES.USER_LOGIN_AFTER
    }
}

const TOKEN_ERROR = function () {
    return {
        type: TYPES.TOKEN_ERROR
    }
}

// register action creator
function registerByPhone(phone, psw) {
    return ( dispatch ) => {
        dispatch(LOGIN_DOING())
        return REGISTER_BY_PHONE(phone, psw)
            .then(function (data) {
                console.log(data)
                if (data.error) {
                    dispatch(LOGIN_FAIL('网络错误'))
                } else {
                    if (data.code === 'S200') {
                       dispatch(LOGIN_SUCCESS(data.data))
                   } else {
                       dispatch(LOGIN_FAIL(data.msg))
                    }
                }
            })
            .catch(function (e) {
                console.log(e)
                dispatch(LOGIN_FAIL('' + e))
            })
    }
}

function loginByPhone(phone, psw) {
    return (dispatch) => {
        dispatch(LOGIN_DOING())
        return LOGIN_BY_PHONE(phone, psw)
            .then(function (data) {
                console.log(data)
                if (data.error) {
                    dispatch(LOGIN_FAIL('网络错误'))
                } else {
                    if (data.code === 'S200') {
                        dispatch(LOGIN_SUCCESS(data.data))
                    } else {
                        dispatch(LOGIN_FAIL(data.msg))
                    }
                }
            })
            .catch(function (e) {
                console.log(e)
                dispatch(LOGIN_FAIL('' + e))
            })
    }
}

export {
    registerByPhone,
    LOGIN_BEFORE,
    loginByPhone
}