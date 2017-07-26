/**
 * Created by liuyiman on 2017/7/25.
 * 个人资料页面
 */

import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import {connect} from 'react-redux'

class Profile extends React.Component{
    constructor(props) {
        super(props)
    }

    static navigattionOptions = {
        title: '个人资料'
    }

    render(){
        return (
            <View></View>
        )
    }
}

let select = function (state) {
    return {
        userMsg: state
    }
}

export default connect(select)(Profile)