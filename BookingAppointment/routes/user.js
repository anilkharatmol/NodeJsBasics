const path = require('path');

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/user/add-user',userController.createNewUser)

router.get('/getUsers',userController.getAllUsers)

router.post('/user/delete/:id',userController.postDeleteUser)



module.exports = router;
