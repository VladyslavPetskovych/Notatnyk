const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  name: { type: String },
  scheduleId: {type: Object},
});

module.exports = mongoose.model('user', userScheme);