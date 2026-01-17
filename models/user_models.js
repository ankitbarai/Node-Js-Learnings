const mongoose = require('mongoose');
const hashPassword = require('../utils/hash_password');

const userSchema = mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
});


userSchema.pre('save', async function (next){

    try {
        if (this.isNew && this.password) {
            this.password = await hashPassword(this.password);
        }
        next();
    } catch (err) {
       next(err) 
    }
})

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;