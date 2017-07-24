/**
 * Created by liuyiman on 2017/7/7.
 *
 * Tab Navigation
 */

import { TabNavigator } from 'react-navigation'

// 引入页面
import Mood from './Mood'
import Setting from './Setting'
import React from 'react'
import {
    StyleSheet
} from 'react-native'

let style = StyleSheet.create({
    header: {
        backgroundColor: 'white',
    }
})

const Main = TabNavigator({
    Mood: {
        screen: Mood
    },
    Setting: {
        screen: Setting
    }
}, {
    navigationOptions: {
        headerLeft: null,
        headerStyle: style.header,
    },
    tabBarOptions: {
        style: {
            backgroundColor: 'white'
        }
    }
})

export default Main