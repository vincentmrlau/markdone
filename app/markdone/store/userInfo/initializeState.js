/**
 * Created by liuyiman on 2017/7/21.
 * 用户基础数据
 * 登录/退出登录的时候刷新
 */
import * as TYPES from './../../type.js'

export default {
    token: undefined,
    userId:undefined,
    headshot: undefined,
    email: undefined,
    nickname: undefined,
    loginStatus: TYPES.USER_LOGIN_BEFORE,
    alertMsg: ''
}