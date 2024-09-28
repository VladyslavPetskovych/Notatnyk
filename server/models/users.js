const mongoose = require("mongoose");
const { scheduleSchema } = require("./schedules.js");

const userScheme = new mongoose.Schema({
  chatId: { type: Number, unique: true },
  name: { type: String },
  schedule: scheduleSchema,
});

module.exports = mongoose.model("users", userScheme);
