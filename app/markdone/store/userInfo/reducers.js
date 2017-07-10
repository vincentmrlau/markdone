/**
 * Created by liuyiman on 2017/7/2.
 */

import * as TYPES from './../type.js'

const initialState = {
    token: undefined,
    headshot: undefined,
    email: undefined,
    nikename: undefined,
    loginStatus: TYPES.USER_LOGIN_BEFORE
}

export function userMsg (state = initialState, action) {
    switch (action.type){
        case TYPES.USER_LOGIN_DOING:
            return{
                ...state,
                loginStatus: TYPES.USER_LOGIN_DOING
            }
        default:
            return state
    }
}