

import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

// redux
import {connect} from 'react-redux'

// icons
import Icon from 'react-native-vector-icons/Ionicons'


class Login extends Component {
    constructor(props){
        super(props)
    }
    static navigationOptions = {
        title: 'Login',
        gesturesEnabled: false,
        header: null
    }

    render() {
        return (
            <View>
                <Text>ALL BEGINNINGS ARE HARD</Text>
            </View>
        )
    }
}

function select(state) {
    return {userMsg: state.userMsg}
}
const ConnectLogin = connect(select)(Login)

export default ConnectLogin