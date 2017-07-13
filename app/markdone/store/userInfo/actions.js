/*
* user info actions
* */

import { AlertIOS } from 'react-native'

import * as TYPES from '../type.js'

// login
export function login(options) {
    return (dispatch) => {
        dispatch({
            type: TYPES.USER_LOGIN_DOING
        })
    }
}

