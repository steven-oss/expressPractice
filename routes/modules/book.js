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
    try{
        const connection = await mysqlConnection()
        await connection.query('INSERT INTO `booktest` (`bookName`) VALUES ("testBook-1")')

        connection.end()
    }catch(error){
        console.error('連接數據庫時出現錯誤：',error)
    }
    res.render('page',{'text':'Post a book'})
})

// router.delete('/',(req,res)=>{
//     res.render('page',{'text':'Delete the book'})
// })

module.exports = router