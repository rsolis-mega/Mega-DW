'use strict'

const axios = require('axios')
// const { default: axios } = require('axios')
const { json } = require('body-parser')
const { response } = require('express')

const getTicket1 = async(req, res, next) => {
    try {
        let respuesta = await getTicket()
        res.send(respuesta)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function getTicket() {
    try {
        const username = 'AdministradorIT'
        let res = await axios.post(`http://192.168.25.17/trusted?username=${username}`)
        let datos = {
            'Token': res.data
        }
        return datos
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getTicket1
}