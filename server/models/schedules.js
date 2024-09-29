const mongoose = require("mongoose");

const oneLessonSchema = new mongoose.Schema({
  subject: { type: String },
  professor: { type: String },
  lab: { type: String },
  link: { type: String },
},{ _id : false });

const daySchema = new mongoose.Schema({
  first: { type: oneLessonSchema },
  second: { type: oneLessonSchema },
  third: { type: oneLessonSchema },
  fourth: { type: oneLessonSchema },
  fifth: { type: oneLessonSchema },
},{ _id : false });

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
},{ _id : false });

const scheduleSchema = new mongoose.Schema({
  scheduleId: Number,
  isOdd: { type: Boolean, default: true },
  oddWeek: weekSchema,
  evenWeek: weekSchema,
},{ _id : false });

module.exports = {
  scheduleSchema,
};
