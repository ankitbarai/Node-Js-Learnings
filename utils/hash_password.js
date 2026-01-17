const bcrypt =  require('bcrypt');

const hashPassword = async (password)=>{
    try {
        const hash = await bcrypt.hash(password,10);
        return hash;
    } catch (err) {
        console.log("error while hashing password");
    }
}

module.exports = hashPassword;