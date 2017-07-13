/**
 * Created by liuyiman on 2017/7/7.
 */

import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Button,
    Alert
} from 'react-native'

// redux
import {connect} from 'react-redux'
// icon
import Icon from 'react-native-vector-icons/FontAwesome'

class Register extends Component {
    constructor(props){
        super(props)
        // initial state
        this.state = {
            phone: '',
            psw: '',
            rePsw: '',
            warning: '',
        }
        // binding this
        this.submit = this.submit.bind(this)
        this.phoneChange = this.phoneChange.bind(this)
    }
    static navigationOptions = {
        title: 'Register',
        header: null,
        gesturesEnabled: false
    }
    phoneChange(value){
        console.log(value)
    }
    submit () {
        console.log(this.state)
        if ( this.state.phone === ''
            || this.state.psw === '') {
            Alert.alert('提示', '手机号码或密码不能为空')
            return
        } else {
            if ( this.state.psw !== this.state.rePsw) {
                Alert.alert('提示', '两次输入的密码不一样')
                return
            }
        }
        // 注册
    }

    render() {
        return (
            <Image source={require('./../../assets/register-bg.jpg')} style={style.container}>
                <View style={style.innerContainer}>
                    <Text style={style.warning}>{this.state.warning}</Text>
                    <View style={style.inputContainer}>
                        <Icon style={style.input.icon} name="mobile-phone" size={30}></Icon>
                        <TextInput style={style.input} placeholder={'请输入手机号码'} clearButtonMode="always" returnKeyType="next" keyboardType="numeric" onChangeText={(phone) => this.setState({phone})}/>
                    </View>
                    <View style={style.inputContainer}>
                        <Icon style={style.input.icon} name="lock" size={20}></Icon>
                        <TextInput style={style.input} placeholder={'请输入密码'} clearButtonMode="always" returnKeyType="next" secureTextEntry={true} onChangeText={(psw) => this.setState({psw})}/>
                    </View>
                    <View style={style.inputContainer}>
                        <Icon style={style.input.icon} name="lock" size={20}></Icon>
                        <TextInput style={style.input} placeholder={'再次输入密码'} clearButtonMode="always" returnKeyType="send" secureTextEntry={true} onChangeText={(rePsw) => this.setState({rePsw})}/>
                    </View>
                    <Button title="注册" onPress={this.submit}/>
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
        width:window.width
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    title:{
        color: 'white',
        fontSize: 25,
        textAlign:'center',
        shadowColor: 'black',
        shadowRadius: 40,
        backgroundColor:'rgba(0,0,0,0.2)',
        margin:30
    },
    warning: {
        backgroundColor:'rgba(0,0,0,0)',
        color: 'red'
    },
    inputContainer: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        flex: -1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical:5,
        borderRadius:4,
        marginVertical: 5,
    },
    inputIcon: {
        backgroundColor: 'rgba(0,0,0,0)',
    },
    input:{
        fontSize: 20,
        height:30,
        borderRadius:3,
        paddingLeft:5,
        flex:1
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