const express = require('express')
const router = express.Router()

// const book = require('./modules/book')
// const book = require('./modules/bookBySequelize')

// router.use('/book',book)

const index = require('./modules/index')
const login = require('./modules/login')
const signIn = require('./modules/signIn')

router.use('/',index)
router.use('/login',login)
router.use('/signIn',signIn)

module.exports = router