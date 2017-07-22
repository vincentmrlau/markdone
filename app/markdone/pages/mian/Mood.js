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

// redux
import {connect} from 'react-redux'

// todo test
import {SOCKET_CONNECT} from '../../store/api/login'

class Mood extends Component {
    constructor(props){
        super(props)
    }
    static navigationOptions = {
        title: 'Mood',
        headerLeft: null
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    render() {
        SOCKET_CONNECT()
        // 检查token
        const { token } = this.props.userMsg,
            {navigate} = this.props.navigation
        if (token === undefined) {
            // 跳转到登录
            navigate('Register')
        }

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
        userMsg:state.userMsg
    }
}
const ConnectMood = connect(select)(Mood)

export default ConnectMood