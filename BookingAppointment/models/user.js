const Sequelize = require('sequelize');
const sequelize = require('../util/database')

const User = sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
    },
    name:Sequelize.STRING,
    email: Sequelize.STRING,
    number:Sequelize.STRING
})

module.exports = User ;