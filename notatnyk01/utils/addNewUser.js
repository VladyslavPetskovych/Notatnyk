const axios = require("axios");
const { setUser } = require("./userCache");
require("dotenv").config({ path: "../.env" });

const addNewUser = async (chatId, firstName) => {
  try {
    const api = process.env.api;
    let userData = {
      idC: chatId,
      name: firstName,
    };

    setUser(chatId, "name", firstName);

    const response = await axios.post(`${api}N4user/newUser/`, userData);

    return response;
  } catch (error) {
    console.log("ERRRRRORRROROROOROR   addNewUser util", error);
  }
};

module.exports = addNewUser;
