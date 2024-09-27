const express = require('express')
const router = express.Router()

router.use((req,res,next)=>{
    console.log('requsetTime: ',new Date(new Date().getTime()+8*60*60*1000))
    next()
})

router.get('/',(req,res)=>{
    res.render('page',{'text':'Get a book'})
})

router.post('/',(req,res)=>{
    res.render('page',{'text':'Post a book'})
})

router.delete('/',(req,res)=>{
    res.render('page',{'text':'Delete the book'})
})

module.exports = router