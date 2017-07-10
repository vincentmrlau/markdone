

import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'

class Login extends Component {
    constructor(props){
        super(props)
    }
    static navigationOptions = {
        title: 'Login',
        gesturesEnabled: false,
        headerLeft: null
    }

    render() {
        return (
            <View>
                <Text>s</Text>
            </View>
        )
    }
}

export default Login