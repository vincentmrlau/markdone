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
    componentDidUpdate() {
        if (this.props.userMsg.loginStatus === TYPES.USER_LOGIN_FAIL) {
            // 登录失败的时候，转换成登录前的状态
            this.props.dispatch(LOGIN_BEFORE())
        } else if( this.props.userMsg.loginStatus === TYPES.LOGIN_SUCCESS) {
            // 登陆成功，跳转到主页
            this.props.navigation.navigate('Mood')
            // 连接socket
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
            <View style={style.inputContainer}>
                <Icon style={style.input.icon} name="lock" size={20}></Icon>
                <TextInput style={style.input} placeholder={'再次输入密码'} clearButtonMode="always" returnKeyType="send" secureTextEntry={true} onChangeText={(rePsw) => this.setState({rePsw})}/>
            </View>
        )
        return (
            <Image source={require('./../../assets/register-bg.jpg')} style={style.container}>
                <View style={style.innerContainer}>
                    <View style={style.inputContainer}>
                        <Icon style={style.input.icon} name="mobile-phone" size={30}></Icon>
                        <TextInput style={style.input} placeholder={'请输入手机号码'} clearButtonMode="always" returnKeyType="next" keyboardType="numeric" onChangeText={(phone) => this.setState({phone})}/>
                    </View>
                    <View style={style.inputContainer}>
                        <Icon style={style.input.icon} name="lock" size={20}></Icon>
                        <TextInput style={style.input} placeholder={'请输入密码'} clearButtonMode="always" returnKeyType="next" secureTextEntry={true} onChangeText={(psw) => this.setState({psw})}/>
                    </View>
                    {this.state.register&&reInput}
                    <Button title={btnText} disabled={btnDisabled} onPress={this.submit}/>
                    <Button title={this.state.register?'去登录':'去注册'} onPress={() => this.setState({register: !this.state.register, btnText: this.state.register?'登录':'注册'})}/>
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
    console.log(state)
    return {
        userMsg: state.userMsg
    }
}

const ConnectRegister = connect(select)(Register)

export default ConnectRegister