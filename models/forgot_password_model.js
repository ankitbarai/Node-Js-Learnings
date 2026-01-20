const express = require('express');
const { default: mongoose } = require('mongoose');

const forgotPasswordOtpSchema = new mongoose.Schema({
    email:{type:String},
    otp:{type:Number},
    expiresAt:{type:Date,expiresAt:'3m', default:Date.now}
});


const forgotPasswordOtpModel = mongoose.model('forgot_password_otp',forgotPasswordOtpSchema);

module.exports = forgotPasswordOtpModel;