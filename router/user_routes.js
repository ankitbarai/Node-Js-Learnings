const express = require('express');
const userController = require('../controllers/user_controller');
const appRouter = express.Router();

//authentication
appRouter.post('/user-registration',userController.userRegister);
appRouter.post('/verify-otp',userController.verifyOtp);


module.exports = {appRouter};