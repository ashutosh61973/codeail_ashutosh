const express=require('express');
const router=express.Router();
const usersController=require('../controllers/users_controller');



router.get('/profile',usersController.profile);

console.log('hey you are in user!!');

module.exports=router;