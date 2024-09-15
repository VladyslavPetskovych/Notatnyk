const User = require('../models/usersModel')


exports.GetOneUser = async ()=>{
    return await User.find();
}

exports.postOneUser = async (userData)=>{
    
    let user = await User.findOne({ idC: userData.idC });
    if(user){
        return true
    } else{
        console.log(userData)
        const user = new User({
            chatId: userData.idC,
            name: userData.name,
        })
        await user.save();
        return user
    }
}