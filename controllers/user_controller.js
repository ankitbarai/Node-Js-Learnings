const userModel = require('../models/user_models')
// user regisstration

const userRegister = async (req,res)=>{
    const {name,email,password} = req.body;

    try {
        if (!(name&&email&&password)) {
            return res.statuscode(400).send({success:false,message:"Name,email and password are required"});
        }

        const getUser = await userModel.findOne({email:email});

        if (getUser) {
            return res.statuscode(400).send({success:false,message:"Email already registered"});
        }else{
            return res.statuscode(200).send({success:false,message:"User registered Successfully"});
        }   
    } catch (err) {
        return res.statuscode(500).send({success:false,message:"Internal Server error"});
    }
}

module.exports = {userRegister};