// userSelection.js
const { getUser, setUser } = require("./userCache");
const bot = require("../bot");

const waitForText = (chatId, key) => {
  return new Promise((resolve) => {
    bot.once("message", (msg) => {
      const user = getUser(chatId) || { schedule: {} };
      const currentDay = user.currentDay;
      const currentLesson = user.currentLesson;
      const isOdd = user.isOdd; // Get whether it's odd or even week

      // Determine which week's data to update
      const weekType = isOdd ? "oddWeek" : "evenWeek";

      // Initialize week if not set
      if (!user.schedule[weekType]) {
        user.schedule[weekType] = {};
      }

      // Initialize day if not set
      if (!user.schedule[weekType][currentDay]) {
        user.schedule[weekType][currentDay] = {};
      }

      // Initialize lesson if not set
      if (!user.schedule[weekType][currentDay][currentLesson]) {
        user.schedule[weekType][currentDay][currentLesson] = {};
      }

      // Store the value (subject, professor, lab, etc.)
      user.schedule[weekType][currentDay][currentLesson][key] = msg.text;

      setUser(chatId, user); // Save the updated user data
      resolve();

      console.log(
        `Updated user object after receiving ${key}:`,
        JSON.stringify(user, null, 2)
      );
    });
  });
};

module.exports =  waitForText ;
