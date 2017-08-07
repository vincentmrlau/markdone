/**
 * Created by liuyiman on 2017/7/10.
 *
 *  SETTING PAGE
 */

import React, {Component} from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

import {
    Icon,
    List,
    ListItem
} from 'react-native-elements'

class Setting extends Component {
    constructor(props){
        super(props)
    }
    static navigationOptions = {
        title: '更多',
        tabBarLabel: '更多',
        tabBarIcon: ({tintColor}) => (
            <Icon name="settings"
                  color={tintColor}
            />
        )
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        console.log('componentWillReceiveProps Mood')
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={style.container}>
                <List>
                    <ListItem
                        title={'个人资料'}
                        leftIcon={
                            {
                                name: 'account-circle'
                            }
                        }
                        onPress={()=> {navigate('Profile')}}
                    />
                </List>
            </View>
        )
    }
}

let style = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Setting