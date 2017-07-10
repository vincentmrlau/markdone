/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

import { Provider } from 'react-redux'

// 引入stack nav和对应的reducer
import {ConnectedStackApp, navReducer} from './pages/Navigations'
console.log(ConnectedStackApp, 'ss',navReducer)
// 引入store配置
import configStore from './store/store'

//config store
const store = configStore({
    nav: navReducer
})({
    blacklist: ['nav']
})

class Markdone extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Provider store={store}>
                <ConnectedStackApp/>
            </Provider>
        )
    }
}


AppRegistry.registerComponent('markdone', () => Markdone);
