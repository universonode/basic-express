const express = require('express')
const router = express.Router();
const {HelloWorldController} = require('../controllers/helloWorldController')

router.get('/helloworld',HelloWorldController);

module.exports = router
