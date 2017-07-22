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
        default:
            console.log('de')
            return state
    }
}