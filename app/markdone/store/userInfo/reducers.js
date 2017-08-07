/**
 * Created by liuyiman on 2017/7/2.
 */

import * as TYPES from './../../type.js'

import initializeState from './initializeState'

export function userMsg (state = initializeState, action) {
    switch (action.type){
        // 登录前
        case TYPES.USER_LOGIN_BEFORE:
            return {
                ...state,
                token: action.token,
                loginStatus: action.loginStatus,
                alertMsg: action.alertMsg
            }
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
                tokenStatus: action.tokenStatus,
                ...action.responseData
            }
            break
        // 登录失败
        case TYPES.USER_LOGIN_FAIL:
            return {
                ...state,
                loginStatus: action.loginStatus,
                alertMsg: action.alertMsg,
            }
            break
        // 登陆后
        case TYPES.USER_LOGIN_AFTER:
            return {
                ...state,
                loginStatus: action.loginStatus
            }
            break
        // 登陆过期
        case TYPES.TOKEN_ERROR:
            return {
                ...state,
                loginStatus: action.loginStatus,
                alertMsg: action.alertMsg
            }
            break
        default:
            return state
    }
}