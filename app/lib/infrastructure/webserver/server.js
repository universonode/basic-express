const express = require('express')
const app = express()

app.use([
    require('../../interface/routes/helloWorld')
])

module.exports = app
