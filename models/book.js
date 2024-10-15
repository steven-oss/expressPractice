const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('book',process.env.MYSQL_USERNAME,process.env.MYSQL_PASSWORD,{
    host:process.env.MYSQL_HOSTNAME,
    dialect:'mysql'
})

const book = require('./mysql/book')(sequelize,Sequelize)

module.exports={
    book
}