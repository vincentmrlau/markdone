/**
 * Created by liuyiman on 2017/7/10.
 * Stack Navigation
 */

import React, { Component } from 'react'
import {StackNavigator, addNavigationHelpers} from 'react-navigation'
import { connect } from 'react-redux'

// import pages
import Main from './mian/index'
import Login from './userInfo/Login'
import Register from './userInfo/Register'

const StackNav = StackNavigator({
    Main: {
        screen: Main
    },
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    }
}, {

})

// navigation 的初始状态
const navInitialState = StackNav.router.getStateForAction(StackNav.router.getActionForPathAndParams('Register'))
const navReducer = ( state = navInitialState, action) => {
    let nextState = StackNav.router.getStateForAction(action, state)
    return nextState || state
}

/*
* StackApp
* */
class StackApp extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <StackNav navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav
            })}/>
        )
    }
}

/*
* connect nav
* */
function select(state) {
    return{
        nav: state.nav
    }
}
const ConnectedStackApp = connect(select)(StackApp)

export {
    ConnectedStackApp,
    navReducer
}