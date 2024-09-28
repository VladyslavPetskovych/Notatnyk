const axios = require("axios");
require("dotenv").config({ path: "../.env" });

const getschedule = async (chatId) => {
  const api = process.env.api;
  const response  = await axios.get(`${api}N4schedule/${chatId}`);
  return response.data;

};

module.exports = getschedule;
