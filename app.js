require('dotenv').config({path:'./config/env/local.env'})

const express = require('express')
const router = require('./routes')
const session = require('express-session')
const methodOverride = require('method-override')
const app = express()
const port = 8000

app.set('views',__dirname + '/public/views') // 樣版引擎所在的資料夾
app.set('view engine', 'ejs') // 樣版的屬性

app.use(express.json())
app.use(express.urlencoded({ extended: true })); 
app.use(session({
    secret:'bdfw7638QW@#das&7fasd^GsdasF3wfeS24',
    resave:false,
    saveUninitialized: false,
    cookie:{secure:false}
}))
app.use(methodOverride('_method'))
app.use(router)

app.listen(port,()=>{
    console.log(`Example app listening on port${port}`)
})