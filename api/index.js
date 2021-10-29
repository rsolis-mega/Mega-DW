'use strict'

const routes = require('./routes/routes')

var bodyParser = require('body-parser')
var cors = require('cors')

var express = require('express')
var app = express()
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.use('/api', routes.route)

app.listen(8080)
console.log('Corriendo en puerto 8080')