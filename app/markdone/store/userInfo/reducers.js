/**
 * Created by liuyiman on 2017/7/2.
 */

import * as TYPES from './../../type.js'

const initialState = {
    token: undefined,
    headshot: undefined,
    email: undefined,
    nikename: undefined,
    loginStatus: TYPES.USER_LOGIN_BEFORE,
    alertMsg: ''
}

export function userMsg (state = initialState, action) {
    console.log('a',action.type)
    switch (action.type){
        // 登录中
        case TYPES.USER_LOGIN_DOING:
            return{
                ...state,
                loginStatus: action.loginStatus
            }
            break
        //登录成功
        case TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                loginStatus: action.loginStatus,
                ...action.responseData
            }
            break
        // 登录失败
        case TYPES.USER_LOGIN_FAIL:
            console.log('USER_LOGIN_FAIL2',action.loginStatus)
            return {
                ...state,
                loginStatus: action.loginStatus,
                alertMsg: action.alertMsg,
                nikename:'hh'
            }
            break
        // 登陆后
        case TYPES.USER_LOGIN_AFTER:
            return {
                ...state,
                loginStatus: action.loginStatus
            }
            break
        default:
            console.log('de')
            return state
    }
}