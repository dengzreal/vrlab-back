const express = require('express')
const router = express.Router()
const db = require('./../database/db')
const syncdb = require('./../database/db_sync')

router.get('/test', function(req, res, next){
	console.log(test);
})


module.exports = router
