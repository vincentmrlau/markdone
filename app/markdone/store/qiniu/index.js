/**
 * Created by liuyiman on 2017/8/4.
 * 七牛上传 图片 模块
 */

import * as TYPES from './../../type'

// 初始状态
const initializeState = {
    uploadToken: undefined,
    tokenStatus: TYPES.QINIU_TOKEN_UNSET,
    expires: 0,
    error: '',
    url: ''
}

/*
* actions
* */
let QINIU_GETTING = function () {
    return {
        type: TYPES.QINIU_TOKEN_GETTING,
        tokenStatus: TYPES.QINIU_TOKEN_GETTING,
        error: ''
    }
}

let QINIU_GET_FAIL = function (error) {
    return {
        type: TYPES.QINIU_TOKEN_GET_FAIL,
        tokenStatus: TYPES.QINIU_TOKEN_GET_FAIL,
        error: error
    }
}

let QINIU_GET_SUCCESS = function (uploadToken, url, expires) {
    return {
        type: TYPES.QINIU_TOKEN_FRESH,
        tokenStatus: TYPES.QINIU_TOKEN_FRESH,
        uploadToken,
        url,
        expires,
        error: ''
    }
}

let QINIU_EXPIRES = function () {
    return {
        type: TYPES.QINIU_TOKEN_EXPIRES,
        tokenStatus: TYPES.QINIU_TOKEN_EXPIRES,
        error: '上传凭证失效',
    }
}

/*
* reducer
* */
let qiniuReducer = function (state = initializeState, action) {
    let nextState = {}
    for (let x in state) {
        nextState[x] = action[x]|| state[x]
    }
    return nextState
}

export {
    qiniuReducer,
    QINIU_GETTING,
    QINIU_GET_FAIL,
    QINIU_GET_SUCCESS,
    QINIU_EXPIRES
}