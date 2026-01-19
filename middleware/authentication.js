const jwt =require('jsonwebtoken');

const secretKey = "ankitlearningnodejs"

function generateToken(userId,email) {
    return jwt.sign({id:userId,email:email},secretKey)
}

function authenticateToken(req,res,next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({success:false, message:"Unauthorized User"});
    }

    const result = VerifyAccessToken(token);
    if(!result.success){
        return res.status(401).json({success:false, message:"Unauthorized User"});
    }

    req.user = res.data;
    next();
}

function VerifyAccessToken(token) {
    try {
        const decode = jwt.verify(token,secretKey);
        return {success:true, data:decode}
    } catch (err) {
        return {success:false, error:err.message}

    }
}

module.exports = {generateToken,authenticateToken};