/**
 * Created by liuyiman on 2017/7/10.
 *
 * H_BALABALA: headers_balabala
 */
import SOCKET_IO_CLIENT from 'socket.io-client'
import {SOCKET_URL} from './config'

const SOCKET_IO = SOCKET_IO_CLIENT(SOCKET_URL)

const H_WITHOUT_TOKEN = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded'
})

const P_WITHOUT_TOKEN_OPT = {
    method: 'POST',
    headers: H_WITHOUT_TOKEN
}


export {
    P_WITHOUT_TOKEN_OPT,
    SOCKET_IO
}