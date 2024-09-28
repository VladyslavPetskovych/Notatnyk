const axios = require("axios");
require("dotenv").config({ path: "../.env" });

const saveSchedule = (user) => {
  console.log(user);
  const api = process.env.api;
  const response = axios.post(
    `${api}N4schedule/newSchedule`,
    user
  );
  //console.log(response)
};

module.exports = saveSchedule;
