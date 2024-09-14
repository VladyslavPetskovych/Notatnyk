const mongoose = require("mongoose");

require("dotenv").config();

const pass = process.env.pass;
const User = require("./models/usersModel");
mongoose.connect(
  `mongodb+srv://peckovychv:${pass}@cluster0.3lplq.mongodb.net/notatnyk`
);
const dbConect = (err, client) => {
  if (err) {
    console.log("Помилка підлючення бази даних: ", err);
    throw err;
  }
  console.log("Ваша База даних під'єднана");
};

dbConect();
