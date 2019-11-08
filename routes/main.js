const express = require('express')
const router = require('express').Router()
const path = require('path')
const static = require('serve-static')
const mysql = require('mysql')
const bodyParser = require('body-parser')
//const app = express()
const cors = require('cors')

const indexRouter = require('./index')

module.exports = function(app, fs){
    app.use(bodyParser.json())
    app.use(cors())
    app.use('/api/index', indexRouter)
}
