const express=require('express');

const loginRoutes=require('./routes/login')

const messageRoutes=require('./routes/message')

const bodyparser=require('body-parser')

const app=express();

app.use(bodyparser.urlencoded({extended:false}));

app.use(loginRoutes);

app.use(messageRoutes)

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(4000)