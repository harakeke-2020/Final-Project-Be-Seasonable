const path = require('path')
const express = require('express')

const foods = require('./routes/foods')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/foods', foods)

server.get('/service-worker.js', (req, res) => {
  res.sendFile(path.join(__dirname, './public/sw.js'))
})
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
