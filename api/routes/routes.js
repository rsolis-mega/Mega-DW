'use strict'

const express = require('express')
const controlDatos = require('../controllers/controlDatos')
const route = express.Router()

route.get('/get-ticket', controlDatos.peticion)

module.exports = {
    route: route
}