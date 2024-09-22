const mongoose = require("mongoose");
const {weekSchema} = require('./schedules.js')

const userScheme = new mongoose.Schema({
  chatId: { type: Number, unique: true },
  name: { type: String },
  schedules: [weekSchema],
});

module.exports = mongoose.model("users", userScheme);
