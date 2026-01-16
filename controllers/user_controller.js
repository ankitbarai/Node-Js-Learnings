const userModel = require('../models/user_models')
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
        return res.statuscode(200).send({ success: true, message: "User registered Successfully",data:{yourOTP:randomOTP} });

    } catch (err) {
        return res.statuscode(500).send({ success: false, message: "Internal Server error" });
    }
}

module.exports = { userRegister };