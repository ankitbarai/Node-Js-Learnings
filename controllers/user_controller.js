const { generateToken } = require('../middleware/authentication');
const userModel = require('../models/user_models');
const verifyOtpModel = require('../models/verify_otp_model');
const {generateToken} = require('../middleware/authentication');


// user regisstration
const userRegister = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        if (!(name && email && password)) {
            return res.statuscode(400).send({ success: false, message: "Name,email and password are required" });
        }

        const getUser = await userModel.findOne({ email: email });

        if (getUser) {
            return res.statuscode(400).send({ success: false, message: "Email already registered" });
        }

        let randomOTP = Math.floor(Math.random() * 1000) + 1000;
        console.log("OTP is", randomOTP);

        let expiryTime = new Date();
        expiryTime.setMinutes(expiryTime.getMinutes()+3);

        let otpLog = await verifyOtpModel.findOne({email});

        if (otpLog) {
            await verifyOtpModel.updateOne({email}, {otp:randomOTP,expiresAt:expiryTime});
        }else{
            const otp = new verifyOtpModel({email,otp:randomOTP,expiresAt:expiryTime});
            await otp.save()
        }

        return res.statuscode(200).send({ success: true, message: "User registered Successfully",data:{yourOTP:randomOTP} });

    } catch (err) {
        return res.statuscode(500).send({ success: false, message: "Internal Server error" });
    }
}

//verify otp
const verifyOtp = async (req,res)=>{
    const { name, email, password,otp } = req.body;

    try {

         if (!(name && email && password)) {
            return res.statuscode(400).send({ success: false, message: "Name,email and password are required" });
        }

        let user = await verifyOtpModel.find({email});
        if(user?.expiresAt < new Date()){
            return res.statuscode(400).send({success:false,message:"OTP has expired"})
        }

        if(user?.otp == otp){
            const users = new userModel({name,email,password});
            await users?.save();

            let user = userModel.findOne({email:email});
            let token = generateToken(user.id, user.email);
            let userData = user.toObject();
            userData['token'] = token;


            return res.statuscode(201).send({success :true, message:"Registered Successfully", data:userData});
        }else{
            return res.statuscode(500).send({success :false, message:"Invalid OTP"});
        }
        
    } catch (err) {
        return res.statuscode(500).send({success :false, message:"Server error"});
    }

}

const getUserDetails = async(req,res)=>{
    try {
        const user = await userModel.findById({_id: req.user['id']});
        return res.status(200).send({success:true, message:"User Details",data:user});
    } catch (err) {
        return res.status(500).send({success:false, message:"Server error"});
    }    
}

module.exports = { userRegister,verifyOtp,getUserDetails };