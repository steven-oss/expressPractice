const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('book','root','123456',{
    host:'localhost',
    dialect:'mysql'
})

const booktest = require('./mysql/booktest')(sequelize,Sequelize)

module.exports={
    booktest
}