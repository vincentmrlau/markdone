/**
 * Created by liuyiman on 2017/8/2.
 */

module.exports = {
    "appenders": [
        {
            "type": "file",
            "category": "start",
            "filename": "log/start.log"
        },
        {
            "type": 'dateFile',
            "filename": "log/socket/socket",
            "pattern": "-yyyy-MM-dd.log",
            "category": "socket",
            "compress": true,
            "alwaysIncludePattern": true
        },
    ]
}