const mongoose = require("mongoose");

require("dotenv").config({ path: '../.env' });

const pass = process.env.pass;
console.log(pass)
console.log(pass)
console.log(pass)
console.log(pass)
console.log(pass)
console.log(pass)

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
