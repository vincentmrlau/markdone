/**
 * Created by liuyiman on 2017/7/25.
 * 个人资料页面
 */

import React from 'react'
import {
    View,
    StyleSheet,
    Modal
} from 'react-native'
import {connect} from 'react-redux'
import {
    Avatar,
    List,
    ListItem
} from 'react-native-elements'

import ImagePicker from 'react-native-image-crop-picker'

import * as TYPES from './../../type'

// 七牛api
import qiniuTokenGetFun from './../../store/api/qiniu'
import {
    QINIU_EXPIRES
} from './../../store/qiniu/index'

class Profile extends React.Component{
    constructor(props) {
        super(props)
        this.checkQiniuToken = this.checkQiniuToken.bind(this)
        this.avatarPress = this.avatarPress.bind(this)
        this.headshotSource = require('./../../assets/default-headshot.png')
    }
    static navigationOptions = {
        title: '个人资料'
    }
    checkQiniuToken(props){
        console.log(props)
        let {qiniu,socket,userMsg,dispatch} = props
        // 先检查token状态
        if (qiniu.tokenStatus === TYPES.QINIU_TOKEN_UNSET
            ||qiniu.tokenStatus === TYPES.QINIU_TOKEN_EXPIRES
            ||qiniu.tokenStatus === TYPES.QINIU_TOKEN_GET_FAIL) {
            // 获取token
            qiniuTokenGetFun(dispatch, userMsg.token)
            return false
        } else if ( qiniu.tokenStatus === TYPES.QINIU_TOKEN_GETTING){
            return false
        } else if ( qiniu.tokenStatus === TYPES.QINIU_TOKEN_FRESH){
            // 检查token时间
            if(qiniu.expires > new Date().getTime()/1000 + 60 * 60 *24) {
                return false
            } else {
                dispatch(QINIU_EXPIRES())
                return false
            }
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.qiniu)
        this.checkQiniuToken(nextProps)
    }
    componentWillMount(){
        this.checkQiniuToken(this.props)
        // 如果有头像
        if (this.props.userMsg.headshot !== undefined) {
            this.headshotSource = {uri: this.props.userMsg.headshot}
        }
    }
    avatarPress(){
        // 跳到头像预览页面
        this.props.navigation.navigate('Headshot',{my: true})
    }
    render(){
        console.log(this.props.qiniu)
        return (
            <View>
                <View>
                    <Avatar
                        xlarge
                        rounded
                        onPress={this.avatarPress}
                        source={this.headshotSource}
                    />
                </View>
            </View>
        )
    }
}

let style = StyleSheet.create({
    container:{},

})

let select = function (state) {
    return {
        userMsg: state.userMsg,
        qiniu: state.qiniu,
        socket: state.socket
    }
}

export default connect(select)(Profile)