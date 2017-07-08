/**
 * Created by liuyiman on 2017/7/2.
 */

import * as TYPES from './../type.js'

const initialState = {
    token:'',
    headshot:'',
    nickname:'',
    status: null
}

export default function userInfo(state = initialState, action) {
    switch (action.type){
        case TYPES.USER_LOGIN_DOING:
            return{
                ...state,
                status: 'LOGIN_DOING'
            }

        default:
            return state
    }
}