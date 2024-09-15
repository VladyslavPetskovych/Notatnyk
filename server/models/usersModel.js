const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  chatId: { type: Number, unique: true },
  name: { type: String },
  schedules: { type: [Object] },
});

module.exports = mongoose.model("users", userScheme);
