/**
 * Created by liuyiman on 2017/8/4.
 */

import {
    QINIU_GETTING,
    QINIU_GET_FAIL,
    QINIU_GET_SUCCESS,
    QINIU_EXPIRES
} from './../qiniu/index'

import {socket} from './socket-init'

export default function ( dispatch, token ) {
    dispatch(QINIU_GETTING())
    socket.emit('qiniu_upload_token', {
        token: token
    },function (data) {
        console.log(data)
        dispatch(QINIU_GET_SUCCESS(data.uploadToken, data.url, data.expires))
    })
}