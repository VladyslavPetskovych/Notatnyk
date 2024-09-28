const User = require("../models/users");
const Schedules = require("../models/schedules");
const schedules = require("../models/schedules");

exports.getSchedule = async (idC) => {
  console.log("Дані отримав: ", idC);
  const userDB = await User.findOne({ chatId: idC.chatId });
  return userDB;
};

exports.postSchedule = async (user) => {
  const userDB = await User.findOneAndUpdate(
    { chatId: user.chatId },
    { schedule: user.schedule }
  );
  console.log(userDB);
  return userDB;
};
