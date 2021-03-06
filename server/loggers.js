/**
 * Created by liuyiman on 2017/8/2.
 */

'use strict'

let log4js = require('log4js')
const logConf = require('./configs/log4js-config')

log4js.configure(logConf)

let startLog = log4js.getLogger('start')

let socketLog = log4js.getLogger('socket')

let httpLog = log4js.getLogger('http')

let debugLog = log4js.getLogger('debug')

module.exports = {
    startLog,
    socketLog,
    httpLog,
    debugLog
}