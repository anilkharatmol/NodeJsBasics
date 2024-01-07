const express = require("express");
const fs=require('fs')


const router = express.Router();

router.get("/", (req, res) => {

    fs.readFile('data.txt',(err,data)=>{
        if(err){
            console.log(err);
            data="No chat exists"
        }

        res.send(
            `${data}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
            <input id="message" type="text" name="message" placeholder="Enter message"/>
             <input type="hidden" name="username" id="username"/><button>send</button></form>`
          );
    })
  
});

router.post("/", (req, res, next) => {
    console.log(req.body.username);
    console.log(req.body.message);

    fs.writeFile("data.txt", `${req.body.username} : ${req.body.message+' '}`,{flag:'a'} ,(err)=>{
        err ? console.log(err) : res.redirect('/');
    })
});

module.exports = router;
