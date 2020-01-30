const http = require('http')
const express = require('express')
const path = require('path')
const HOMEDIR = path.join(__dirname, '..')

const app = express()
const rootRouter = require(path.join(HOMEDIR, 'routes'))
app.use('/', rootRouter)

const port = process.env.PORT || 8080

const server = http.createServer(app).listen(port, function() {
    console.log('Running on port:', port)
})

module.exports = server