const { Sequelize } = require("sequelize")
const sequelize = require("sequelize")

const conexaodb = new Sequelize('mobile','root','vitoria10',{
    host:'localhost',
    dialect:'mysql',
    logging: false
})

module.exports = conexaodb