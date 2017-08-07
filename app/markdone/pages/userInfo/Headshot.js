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

import ImageViewer from 'react-native-image-pan-zoom'

class Headshot extends React.Component {
    constructor(props){
        super(props)
        this.state.headshotSource = require('./../../assets/default-headshot.png')
    }

    render(){
        return(
            <ImageViewer cropWidth={Dimensions.get('window').width}
                         cropHeight={Dimensions.get('window').height}
                         imageWidth={200}
                         imageHeight={200}>
                <Image style={{width:200, height:200}} source={this.state.headshotSource}/>
            </ImageViewer>
            )
    }
}

export default ImageViewer