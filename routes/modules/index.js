const express = require('express')
const requireLogin = require('../../middleware/auth')
const router = express.Router()
const bookController = require("../../controllers/bookController")

router.get('/',requireLogin,bookController.getBooks)

module.exports = router