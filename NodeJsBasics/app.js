const express=require('express');

const bodyparser=require('body-parser')

const app=express();


app.use(bodyparser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    // console.log('In first middleware');
    res.send('<html><body><form action="/product" method="POST"><input type="text" name="title"/><input type="number" name="size"/><button type="submit">Add product</button></form></body></html>')
})

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})


app.use('/',(req,res,next)=>{
    res.send('<h1>Hello from Express JS</h1>')
})

app.listen(4000)