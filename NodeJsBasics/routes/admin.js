const express=require('express');

const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    // console.log('In first middleware');
    res.send('<html><body><form action="/admin/add-product" method="POST"><input type="text" name="title"/><input type="number" name="size"/><button type="submit">Add product</button></form></body></html>')
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})

module.exports=router;