/**
 * Created by liuyiman on 2017/7/10.
 *
 * H_BALABALA: headers_balabala
 */

const H_WITHOUT_TOKEN = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded'
})

const P_WITHOUT_TOKEN_OPT = {
    method: 'POST',
    headers: H_WITHOUT_TOKEN
}


export {
    P_WITHOUT_TOKEN_OPT,
}