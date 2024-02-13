const Sequelize= require('sequelize');

const sequelize=new Sequelize('new_node_schma','root','1829',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize;