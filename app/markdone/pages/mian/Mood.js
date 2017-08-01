/**
 * Created by liuyiman on 2017/7/7.
 *
 *   MOOD   MOOD  MOOD
 */

import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'
import {
    Icon
} from 'react-native-elements'

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
    componentWillMount(){
        console.log('componentWillMount',this.props.socket.status)
        // 检查token
        const { token } = this.props.userMsg,
            {navigate} = this.props.navigation,
            {socket} = this.props,
            {dispatch} = this.props
        if (token === undefined) {
            // 跳转到登录
            navigate('Register')
        } else {
            // 连接socket
            // 检测是否初始化
            if (socket.initStatus === TYPES.SOCKET_BEFORE_INIT) {
                // 初始化
                dispatch(SOCKET_INIT(token))
            } else {
                console.log(socket.status)
                if (socket.status === TYPES.SOCKET_CONNECT_BEFORT) {
                    console.log(socket.status)
                    // 连接
                    dispatch(SOCKET_CONNECT())
                } else {
                    console.log(socket.status)
                }
            }
        }
    }
    componentWillUpdate(){
        console.log('willUpdate')
        // update的时候也做同样的检测
        const { token } = this.props.userMsg,
            {socket} = this.props,
            {dispatch} = this.props
        // 检测是否初始化
        if (socket.initStatus === TYPES.SOCKET_BEFORE_INIT) {
            // 初始化
            dispatch(SOCKET_INIT(token))
        } else {
            if (socket.status === TYPES.SOCKET_CONNECT_BEFORT) {
                // 连接
                dispatch(SOCKET_CONNECT())
            } else {
                // todo 处理其他情况
            }
        }
    }
    render() {
        const {userMsg, navigation} = this.props
        return (
            <View>
                <Text>s</Text>
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