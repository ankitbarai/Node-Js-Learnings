const express = require('express');
const { default: mongoose } = require('mongoose');

const verifyOtpSchema = new mongoose.Schema({
    email:{type:String},
    otp:{type:Number},
    expiresAt:{type:Date,expiresAt:'3m', default:Date.now}
});


const verifyOtpModel = mongoose.model('verify-otp',verifyOtpSchema);

module.exports = verifyOtpModel;