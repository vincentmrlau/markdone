/**
 * Created by liuyiman on 2017/7/7.
 */
'use strict'

const log4js = require('log4js')

// 配置
log4js.configure({
    appenders: [{
        type: 'dateFile',
        filename: './server/log/',
        pattern: 'yyyy-MM-dd.log',
        category: 'logInfo',
        alwaysIncludePattern: true
    }]
})

module.exports = function (app) {
    app.use(log4js.connectLogger(log4js.getLogger('logInfo'), {
        level: log4js.levels.DEBUG,
        format: ':method :url :status'
    }))
}