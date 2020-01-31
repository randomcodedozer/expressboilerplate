const express = require('express')
const router = express.Router()
const path = require('path')
const HOMEDIR = path.join(__dirname, '..')
const metadata = require(path.join(HOMEDIR, 'config', 'metadata'))

router.get('/', function (req, res) {
    res.send('Hello World!')
})

router.get('/status', function (req, res) {
    res.send({
        version: metadata.version,
        description: metadata.description,
        lastcommitsha: process.env.SHA || 'not set'
    })
})

module.exports = router
