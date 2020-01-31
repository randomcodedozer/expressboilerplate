const http = require('http')
const express = require('express')
const path = require('path')
const HOMEDIR = path.join(__dirname)
const config = require(path.join(HOMEDIR, 'config'))
const helmet = require('helmet')

const app = express()
app.use(helmet());
const rootRouter = require(path.join(HOMEDIR, 'routes'))
app.use('/', rootRouter)

const port = process.env.PORT || config.port || 8081

const server = http.createServer(app).listen(port, function() {
    console.log('Running on port:', port)
})

module.exports = server
