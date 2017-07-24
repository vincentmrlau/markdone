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

// todo test
import {SOCKET_CONNECT} from '../../store/api/login'

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
        console.log('componentWillMount')
        // 检查token
        const { token } = this.props.userMsg,
            {navigate} = this.props.navigation
        if (token === undefined) {
            // 跳转到登录
            navigate('Register')
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
        userMsg:state.userMsg
    }
}
const ConnectMood = connect(select)(Mood)

export default ConnectMood