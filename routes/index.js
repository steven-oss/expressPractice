const express = require('express')
const router = express.Router()

// const book = require('./modules/book')
const book = require('./modules/bookBySequelize')

router.use('/book',book)

module.exports = router