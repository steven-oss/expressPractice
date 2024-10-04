const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('book',process.env.MYSQL_USERNAME,process.env.MYSQL_PASSWORD,{
    host:process.env.MYSQL_HOSTNAME,
    dialect:'mysql'
})

const booktest = require('./mysql/booktest')(sequelize,Sequelize)

module.exports={
    booktest
}