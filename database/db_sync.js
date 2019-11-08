
var mysql = require('sync-mysql')
var config = require('./config')
var syncdb = new mysql({
    host : config.host,
    user : config.user,
    password : config.password,
    database : config.database,
    insecureAuth : true,
    multipleStatements: true
})
module.exports = syncdb
