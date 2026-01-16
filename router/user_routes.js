const express = require('express');
const userController = require('../controllers/user_controller');
const appRouter = express.Router();

//authentication
appRouter.post('/user-registration',userController.userRegister);

module.exports = {appRouter};