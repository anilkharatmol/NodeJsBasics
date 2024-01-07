const express=require('express');
const router=express.Router();

router.get('/login',(req,res,next)=>{
    res.send(
    `<form action="/login" method="POST" onsubmit="localStorage.setItem('username',document.getElementById('username').value)" >
    <input type="text" id="username"  name="username" placeholder="Enter username"/>
    <button>Login</button></form>`)

})
router.post('/login',(req,res)=>{
    res.redirect('/');
})

module.exports=router;