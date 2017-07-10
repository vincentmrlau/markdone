/**
 * Created by liuyiman on 2017/7/7.
 *
 * Tab Navigation
 */

import { TabNavigator } from 'react-navigation'

// 引入页面
import Mood from './Mood'
import Setting from './Setting'

const Main = TabNavigator({
    Mood: {
        screen: Mood
    },
    Setting: {
        screen: Setting
    }
})

export default Main