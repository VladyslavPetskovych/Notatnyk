const mongoose = require("mongoose");

require("dotenv").config();

const pass = process.env.pass;

mongoose.connect(
  `mongodb+srv://peckovychv:${pass}@cluster0.3lplq.mongodb.net/`
);
const dbConect = (err, client) => {
  if (err) {
    console.log("Помилка підлючення бази даних: ", err);
    throw err;
  }

  const Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;
  
  const BlogPost = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
  });

  console.log("Ваша База даних під'єднана");

};
dbConect()
