const mongoose = require("mongoose");

const oneLessonSchema = new mongoose.Schema({
  title: { type: String },
  professor: { type: String },
  link: { type: String },
});

const daySchema = new mongoose.Schema({
  first: { type: oneLessonSchema },
  second: { type: oneLessonSchema },
  third: { type: oneLessonSchema },
  fourth: { type: oneLessonSchema },
  fifth: { type: oneLessonSchema },
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
  evenWeek: weekSchema,
});

module.exports = {
  Schedule: mongoose.model("schedule", scheduleSchema),
  weekSchema,
};
