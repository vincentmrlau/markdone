/**
 * Created by liuyiman on 2017/8/3.
 * 启动页面，判断登录状态
 */

import {
    View,
    Text,
    AsyncStorage
} from 'react-native'

import {
    connect
} from 'react-redux'

import {
    NavigationActions
} from 'react-navigation'

import React from 'react'

import * as TYPE from './../type'

class Operating extends React.Component{
    constructor(props){
        super(props)
    }
    static navigationOptions = {
        title: 'Login',
        gesturesEnabled: false,
        header: null
    }

    componentWillMount(){
        console.log(this.props)
        this._isNavigated = false
        // 判断打开次数, 如果是第一次打开则跳转到登录页面
        AsyncStorage.getItem('_operation', (error, result) => {
            console.log(error, result)
            if(result != null) {
                // 设置打开次数并等待update(redux-persist异步读取)
                let newOperation = Number(result) + 1
                AsyncStorage.setItem('_operation', newOperation+'', (error) => {
                    if(error) {
                        console.log('set item error', error)
                    }
                }).catch(function (e) {
                    console.log('set item error', e)
                })
            } else {
                // 设置打开次数1并跳转
                AsyncStorage.setItem('_operation', '1', (error) => {
                    if(error){
                        console.log('set item error', error)
                    } else {
                        // 跳转
                        // 跳转到登录界面并清空
                        const resetAction = NavigationActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Register'})
                            ]
                        })
                        this._isNavigated = true
                        this.props.navigation.dispatch(resetAction)
                    }
                }).catch(function (e) {
                    console.log('set item error', e)
                })
            }
        }).catch(function (e) {
            console.log('set item error', e)
        })
    }

    componentWillReceiveProps(nextProps){
        console.log('update',nextProps)
        if(this._isNavigated){
            // 已经离开页面了就不再做操作了
            return false
        } else {
            // 设置导航状态
            this._isNavigated = true
            // 判断登录状态
            let resetAction
            if (nextProps.userMsg.loginStatus !== TYPE.LOGIN_SUCCESS) {
                resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Register'})
                    ]
                })
            } else {
                resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Main'})
                    ]
                })
            }
            nextProps.navigation.dispatch(resetAction)
        }
    }

    render() {
        return (
            <View>
                <Text>美好的事情正在发生...</Text>
            </View>
        )
    }
}

let select = function (state) {
    return{
        userMsg: state.userMsg
    }
}

export default connect(select)(Operating)