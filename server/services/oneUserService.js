const User = require("../models/users");

exports.GetOneUser = async (idC) => {
    try {
       
        return await User.findOne({ chatId: idC });
      } catch (error) {
        throw new Error("Database error while fetching user");
      }
};

exports.postOneUser = async ({ idC, name }) => {
  let user = await User.findOne({ chatId: idC });
  if (user) {
    return user;
  } else {
    const newUser = new User({
      chatId: idC,
      name: name,
    });
    await newUser.save();
    return newUser;
  }
};
