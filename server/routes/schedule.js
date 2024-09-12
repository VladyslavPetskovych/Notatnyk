const express = require("express");
const router = express.Router();
const User = require("../models/users");
const Schedule = require("../models/schedule");

router.get("/", function (req, res) {
  //   const newUser = new User({
  //     name: "John Doe",
  //   });
  //   newUser.save();

  let schedule = {};

  res.send("schedule sended ", schedule);
});

module.exports = router;
