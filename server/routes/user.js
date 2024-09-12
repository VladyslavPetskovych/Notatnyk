const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.get("/", function (req, res) {
  
  const newUser = new User({
    name: "John Doe",
  });
  newUser.save();
  res.send("1111");
});

module.exports = router;
