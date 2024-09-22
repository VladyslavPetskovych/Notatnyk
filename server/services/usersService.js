const Users = require("../models/users");


exports.getAllUsers = async () => {
  return await Users.find(); 
};
