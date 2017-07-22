/**
 * Created by liuyiman on 2017/7/21.
 */

import initializeState from './initializeState'

let socket = function (state = initializeState, action) {
    switch (action.type) {
        case 'socket':
            return {
                ...state,
                socket: action.socket
            }
        default:
            return state
    }
}

export {socket}