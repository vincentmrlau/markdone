/**
 * Created by liuyiman on 2017/7/7.
 */

import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image
} from 'react-native'

// redux
import {connect} from 'react-redux'

class Register extends Component {
    constructor(props){
        super(props)
    }
    static navigationOptions = {
        title: 'Register',
        header: null,
        gesturesEnabled: false
    }

    render() {
        return (
            <Image source={require('./../../assets/register-bg.jpg')} style={style.container}>
                <View style={style.innerContainer}>
                    <Text style={style.title}>REGISTER</Text>
                    <TextInput style={style.input} placeholder={'phone number'} placeholderTextColor="white" clearButtonMode="always"/>
                </View>
            </Image>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'white',
        padding: 40,
        resizeMode: Image.resizeMode.cover,
        backgroundColor:'black',
        width:window.width
    },
    innerContainer: {

    },
    title:{
        color: 'white',
        fontSize: 30,
        textAlign:'center',
        shadowColor: 'black',
        shadowRadius: 40,
        backgroundColor:'rg'
    },
    input:{
        color:'white',
        fontSize: 30,
        height:30
    }
})



// connect
function select(state) {
    return {
        userMsg: state.userMsg
    }
}

const ConnectRegister = connect(select)(Register)

export default ConnectRegister