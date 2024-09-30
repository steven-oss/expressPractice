const mysql = require('mysql2/promise')

async function mysqlConnection() {
    try{
        const connection = await mysql.createConnection({
            host:'localhost',
            port:3306,
            user:'root',
            database:'book',
            password:'123456'
        })

        return connection;

    }catch(error){
        console.error('連接數據庫時出現錯誤：',error)
    }
}
module.exports = {
    mysqlConnection
}