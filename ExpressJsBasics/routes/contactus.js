const express=require('express');

const controllers=require('../controllers/controllers')
const router=express.Router();


router.get('/contactus',controllers.contactUs)

router.get('/success',controllers.successPage)

module.exports=router;