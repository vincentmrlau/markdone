/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { TabNavigator} from 'react-navigation'

import ChatScreen from './pages/chat.js'

export default class Welcome extends Component {
  static navigationOptions = {
    title:'Welcome'
  }
  render() {
    // const { navigate, goBack } = this.props.navigation
    return (
      <View style={styles.container}>
        <Button title='to chat' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const Mackdone = TabNavigator({
  Welcome: {
    screen: Welcome
  },
  Chat: {
    screen:ChatScreen
  }
}, {
  swipeEnabled: true,
  animationEnabled: true
})

class Root extends Component{
  render(){
    return(
        <View>
          <Text>?</Text>
        </View>
    )
  }
}


AppRegistry.registerComponent('markdone', () => Root);
