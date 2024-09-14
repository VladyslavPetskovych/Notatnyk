const User = require('../models/userModel')

exports.GetUser = async ()=>{
    return await User.find();
}