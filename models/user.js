const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('user',process.env.MYSQL_USERNAME,process.env.MYSQL_PASSWORD,{
    host:process.env.MYSQL_HOSTNAME,
    dialect:'mysql'
})

const user = require('./mysql/user')(sequelize,Sequelize)

module.exports={
    user
}