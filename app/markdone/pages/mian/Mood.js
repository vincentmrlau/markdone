/**
 * Created by liuyiman on 2017/7/7.
 *
 *   MOOD   MOOD  MOOD
 */

import React, {Component} from 'react'
import {
    View,
    Text,
    Alert,
    AsyncStorage
} from 'react-native'
import {
    Icon
} from 'react-native-elements'

import {
    NavigationActions
} from 'react-navigation'

// redux
import {connect} from 'react-redux'

// socket actions
import {
    SOCKET_INIT,
    SOCKET_CONNECT
} from './../../store/main-socket/action'

import * as TYPES from './../../type'

class Mood extends Component {
    constructor(props){
        super(props)
        this.checkTokenConnect = this.checkTokenConnect.bind(this)
    }
    static navigationOptions = {
        title: '报表',
        headerLeft: null,
        tabBarLabel:'报表',
        tabBarIcon: ({tintColor}) => (
            <Icon name="poll"
                  color={tintColor}
            />
        )
    }
    // check token && connect
    checkTokenConnect(props){
        // 已经跳转到其他地方了就return
        const { userMsg } = props,
            {navigate} = props.navigation,
            {socket} = props,
            {dispatch} = props
        // 不是登录成功的状态区分跳转
        if (userMsg.loginStatus !== TYPES.LOGIN_SUCCESS) {
            if (this._isNavigated) {
                return false
            } else {
                this._isNavigated = true
                // 提示原因
                Alert.alert('登录状态错误',userMsg.alertMsg,[
                    {
                        text:'OK',
                        onPress: () => {
                            // 跳转到登录界面并清空
                            const resetAction = NavigationActions.reset({
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({ routeName: 'Register'})
                                ]
                            })
                            props.navigation.dispatch(resetAction)
                        }
                    }
                ])
                return false
            }
        } else {
            // 登录成功的状态
            this._isNavigated = false
            // 连接socket
            // 检测是否初始化
            if (socket.initStatus === TYPES.SOCKET_BEFORE_INIT) {
                console.log(userMsg.toke)
                // 初始化
                dispatch(SOCKET_INIT(userMsg.token))
            } else {
                console.log(socket.status)
                if (socket.status === TYPES.SOCKET_CONNECT_BEFORT || socket.status === TYPES.SOCKET_CONNECT_DISCONNECT) {
                    // 连接
                    dispatch(SOCKET_CONNECT())
                } else {
                    console.log(socket.status)
                }
            }
        }
        return true
    }
    componentWillReceiveProps(nextProps){
        console.log('nextProps',nextProps)
        this.checkTokenConnect(nextProps)
    }
    componentWillMount(){
        console.log('willMout',this.props)
        // 解决跳转多次触发跳转导致内存泄漏的问题
        this._isNavigated = false
        this.checkTokenConnect(this.props)
    }
    render() {
        return (
            <View>
                <Text></Text>
            </View>
        )
    }
}
function select(state) {
    return{
        userMsg:state.userMsg,
        socket: state.socket
    }
}
const ConnectMood = connect(select)(Mood)

export default ConnectMood