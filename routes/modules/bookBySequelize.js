const express = require('express')
// const { mysqlConnection } = require('../../config/mysqlConnection')
const router = express.Router()
const {booktest} = require('../../models/index')

router.get('/',async (req,res)=>{
    try{
        const books = await booktest.findAll({raw:true})
        console.log(books)
    }catch(error){
        console.error('連接數據庫時出現錯誤：',error)
    }
    res.render('page',{'text':'Get a book'})
})

router.post('/',async (req,res)=>{
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