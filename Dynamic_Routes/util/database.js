const mysql=require('mysql2');

const pool =mysql.createPool({
    host:'localhost',
    user:'root',
    database:'new_node_schma',
    password:'1829'
})

module.exports=pool.promise()