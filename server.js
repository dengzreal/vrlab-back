var express = require('express')
var app = express()
var cors = require('cors')
var http = require('http')
var db = require('./database/db')
var syncdb = require('./database/db_sync')
var fs = require('fs')
db.connect()

app.set('port', process.env.PORT || 8800)
app.use(cors())

var router = require('./routes/main')(app, fs)

var server = http.createServer(app).listen(app.get('port'), "0.0.0.0", function(){
	    console.log('server start ... %s %s', server.address().address, server.address().port)
})
