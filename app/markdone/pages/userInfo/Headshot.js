/**
 * Created by liuyiman on 2017/8/7.
 * 查看头像
 */

import React from 'react'
import {
    Modal,
    View,
    Image
} from 'react-native'

import ImageZoomViewer from 'react-native-single-image-zoom-viewer'

class Headshot extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ImageZoomViewer source={require('./../../assets/default-headshot.png')}/>
            )
    }
}

export default Headshot