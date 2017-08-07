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
    // Button,
    Alert
} from 'react-native'

import {
    Button,
    FormInput,
} from 'react-native-elements'

// redux
import {connect} from 'react-redux'
// icon
import Icon from 'react-native-vector-icons/FontAwesome'
// action
import { registerByPhone, LOGIN_BEFORE, loginByPhone} from './../../store/userInfo/actions'
// types
import * as TYPES from './../../type'

class Register extends Component {
    constructor(props){
        super(props)
        // initial state
        this.state = {
            phone: '',
            psw: '',
            rePsw: '',
            warning: '',
            register: false
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
            // 判断是注册还是登录
            if ( this.state.register) {
                // 注册
                if ( this.state.psw !== this.state.rePsw) {
                    Alert.alert('提示', '两次输入的密码不一样')
                    return
                } else {
                    // 注册
                    this.props.dispatch(registerByPhone(this.state.phone, this.state.psw))
                }
            } else {
                // 登录
                this.props.dispatch(loginByPhone(this.state.phone, this.state.psw))
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log('register')
        if (nextProps.userMsg.loginStatus === TYPES.USER_LOGIN_FAIL) {
            // 登录失败的时候，转换成登录前的状态
            nextProps.dispatch(LOGIN_BEFORE())
        } else if( nextProps.userMsg.loginStatus === TYPES.LOGIN_SUCCESS) {
            // 登陆成功，跳转到主页
            nextProps.navigation.navigate('Mood')
        }
    }
    render() {
        let btnText = (this.props.userMsg.loginStatus === TYPES.USER_LOGIN_DOING)?'正在提交...':(this.state.register?'注册':'登录')
        let btnDisabled = (this.props.userMsg.loginStatus === TYPES.USER_LOGIN_DOING)
        // 如果登录失败，设置状态回到登录前，弹框提醒登录失败
        if (this.props.userMsg.loginStatus === TYPES.USER_LOGIN_FAIL) {
            Alert.alert('登录失败', this.props.userMsg.alertMsg)
        }
        const reInput = (
            <FormInput placeholder={'再次输入密码'} clearButtonMode="always" returnKeyType="send" secureTextEntry={true} onChangeText={(rePsw) => this.setState({rePsw})}/>
        )
        return (
            <View style={style.container}>
                <Image source={require('./../../assets/header.jpg')} style={style.header}>
                </Image>
                <View style={style.formContainer}>
                    <FormInput placeholder={'请输入手机号码'} clearButtonMode="always" returnKeyType="next" keyboardType="numeric" onChangeText={(phone) => this.setState({phone})}/>
                    <FormInput placeholder={'请输入密码'} clearButtonMode="always" returnKeyType="next" secureTextEntry={true} onChangeText={(psw) => this.setState({psw})}/>
                    {this.state.register&&reInput}
                    <Button style={style.submitBtn} title={btnText} disabled={btnDisabled} onPress={this.submit}/>
                </View>
                <View style={style.footer}>
                    <Text style={style.link} onPress={() => this.setState({register: !this.state.register, btnText: this.state.register?'登录':'注册'})}>{this.state.register?'已有账号？去登录吧':'还没有账号？注册一个吧'}</Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    header: {
        width:window.width,
        height: 250
    },
    formContainer: {
        paddingVertical: 20
    },
    submitBtn: {
        marginVertical:10
    },
    footer: {
        paddingHorizontal: 20
    },
    link: {
        textDecorationLine: 'underline',
        textAlign: 'right'
    }
})

// connect
function select(state) {
    console.log(state)
    return {
        userMsg: state.userMsg
    }
}

const ConnectRegister = connect(select)(Register)

export default ConnectRegister