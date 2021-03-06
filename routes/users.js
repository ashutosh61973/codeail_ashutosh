const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersController = require('../controllers/users_controller');




router.get('/profile', passport.checkAuthentication, usersController.profile);
router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);
// console.log('hey you are in user!!');
router.post('/create', usersController.create);
// use passport
router.post('/create-session', passport.authenticate(
    'local',
    { failureRedirect: '/users/sign-in' },
)
    , usersController.createSession);
module.exports = router;
router.get('/sign-out', usersController.destroySession);