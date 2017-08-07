/**
 * Created by liuyiman on 2017/7/21.
 */

import initializeState from './initializeState'
import * as TYPES from './../../type'

/*
* 
* */
let socket = function (state = initializeState, action) {
    let returnStates = {}
    for (let x in state) {
        returnStates[x] = action[x] || state[x]
    }

    return returnStates
}

export {socket}