const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  name: { type: String },
  schedules: {type: [Object]},
});

module.exports = mongoose.model('user', userScheme);