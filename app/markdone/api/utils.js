/**
 * Created by liuyiman on 2017/7/14.
 */

/*
* 对象转成www-form-urlencoded
* */
const OBJ_PARSER_URLCODE = function (obj = {}) {
    let result =''
    for ( let x in obj) {
        result += x + '=' +obj[x] + '&'
    }
    return result.slice(0,-1)
}

export {OBJ_PARSER_URLCODE}