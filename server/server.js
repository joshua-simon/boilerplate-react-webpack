const path = require('path')
const express = require('express')

const memesApi = require('./routes/memeRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/v1/memes', memesApi)

module.exports = server
