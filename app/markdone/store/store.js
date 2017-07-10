/*
* store
* */

import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'

import { userMsg } from './userInfo/reducers'

/*
* all reducer except navigation reducer
* */

let allReducer = {
    userMsg: userMsg
}

/*
* 生成store的helper函数
* */
const configStore = function ( reducers = {}) {
    const rootReducer = combineReducers({
        ...allReducer,
        ...reducers
    })
    return function (_options = {}) {
        const store = createStore(
            rootReducer,
            _options.initialState,
            compose(
                applyMiddleware(thunkMiddleware),
                autoRehydrate()
            )
        )
        const persistOptions = {
            storage: AsyncStorage,
            blacklist: _options.blacklist
        }
        persistStore(store, persistOptions)
        return store
    }
}

export default configStore