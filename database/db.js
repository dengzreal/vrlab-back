
var mysql = require('mysql')
var config = require('./config')
var db = mysql.createConnection({
    host : config.host,
    user : config.user,
    password : config.password,
    database : config.database,
    insecureAuth : true,
    multipleStatements: true
})
module.exports = db
