const _=require('lodash')
const dayjs = require('dayjs')
const {check,validationResult} = require('express-validator')
const express = require('express')
// const { mysqlConnection } = require('../../config/mysqlConnection')
const router = express.Router()
const {booktest} = require('../../models/index')

router.use((req,res,next)=>{
    console.log('requestTime',dayjs().format('YYYY-MM-DD HH:mm:ss'))
    next()
})

router.get('/',async (req,res)=>{
    try{
        const books = await booktest.findAll({raw:true})
        console.log(books)
    }catch(error){
        console.error('連接數據庫時出現錯誤：',error)
    }
    res.render('page',{'text':'Get a book'})
})

router.post('/',[
    check('bookName')
      .exists({checkFalsy:true})
      .withMessage('缺少bookName')
],async (req,res)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        const errorMessage = errors.array().map(error=>error.msg)
        console.log(errorMessage)
        return res.status(400).json({errors:errorMessage})
    }

    const bookName = req.body.bookName

    try{
        const books = await booktest.create({bookName:bookName},{raw:true})
    }catch(error){
        console.error('連接數據庫時出現錯誤：',error)
    }
    res.render('page',{'text':`add a new book: ${bookName}`})
})

router.delete('/:id',async (req,res)=>{
    const id = req.params.id

    try{
        const books = await booktest.destroy({
            where:{
                id:id
            }
        })

    }catch(error){
        console.error('連接數據庫時出現錯誤：',error)
    }

    res.render('page',{'text':`Delete the book number ${id}`})
})

module.exports = router