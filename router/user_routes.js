const express = require('express');
const userController = require('../controllers/user_controller');
const{authenticateToken} = require('../middleware/authentication')
const appRouter = express.Router();

//authentication
appRouter.post('/user-registration',userController.userRegister);
appRouter.post('/verify-otp',userController.verifyOtp);
appRouter.post('/user-login',userController.userLogin);

//users

appRouter.get('/user-details',authenticateToken,userController.getUserDetails);


module.exports = {appRouter};


// use authenticate token in route where ever you need
// appRouter.post('/user-registration',authenticateToken,userController.userRegister);