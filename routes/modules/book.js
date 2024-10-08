const express = require('express')
const { mysqlConnection } = require('../../config/mysqlConnection')
const router = express.Router()

router.get('/',async (req,res)=>{
    try{
        const connection = await mysqlConnection()
        await connection.query('SELECT * FROM `booktest`')

        connection.end()
    }catch(error){
        console.error('連接數據庫時出現錯誤：',error)
    }
    res.render('page',{'text':'Get a book'})
})

router.post('/',async (req,res)=>{
    const bookName = req.body.bookName

    try{
        const connection = await mysqlConnection()
        await connection.query(`INSERT INTO booktest (bookName) VALUES ("${bookName}")`)

        connection.end()
    }catch(error){
        console.error('連接數據庫時出現錯誤：',error)
    }
    res.render('page',{'text':'Post a book'})
})

router.delete('/:id',async (req,res)=>{
    const id = req.params.id

    try{
        const connection = await mysqlConnection()
        await connection.query(`DELETE FROM booktest where id = ?`,id)

        connection.end()
    }catch(error){
        console.error('連接數據庫時出現錯誤：',error)
    }

    res.render('page',{'text':'Delete the book'})
})

module.exports = router