const mongoose = require("mongoose");

const daySchema = new mongoose.Schema({
  title: { type: String },
  profesor: { type: String },
  link: { type: String },
  time: { type: String },
});

const weekSchema = new mongoose.Schema({
  monday: {
    type: daySchema,
  },
  tuesday: {
    type: daySchema,
  },
  wednesday: {
    type: daySchema,
  },
  thursday: {
    type: daySchema,
  },
  friday: {
    type: daySchema,
  },
});

const scheduleSchema = new mongoose.Schema({
  scheduleId: Number,
  isOdd: { type: Boolean, default: true },
  oddWeek: weekSchema,
  EvenWeek: weekSchema,
});

module.exports = mongoose.model("schedule", scheduleSchema);
