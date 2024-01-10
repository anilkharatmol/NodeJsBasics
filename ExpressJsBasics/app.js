const express=require('express');

const adminRoutes=require('./routes/admin')

const shopRoutes=require('./routes/shop')

const contactus=require('./routes/contactus')

const bodyparser=require('body-parser')

const app=express();
const path=require('path')

const rootDir=require('./util/path')

app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);

app.use(shopRoutes)

app.use(contactus)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','page-not-found.html'))
})

app.listen(4000)