// userSelection.js
const { getUser, setUser } = require("./userCache");
const bot = require("../bot");

const waitForText = (chatId, key) => {
  return new Promise((resolve) => {
    bot.once("message", (msg) => {
      const user = getUser(chatId) || { schedule: {} }; // Get existing user data or create new one if empty

      // Get the current day and lesson from the user's data
      const currentDay = user.currentDay;
      const currentLesson = user.currentLesson;

      // Initialize the day's schedule if it doesn't exist
      if (!user.schedule[currentDay]) {
        user.schedule[currentDay] = {};
      }
      if (!user.schedule[currentDay][currentLesson]) {
        user.schedule[currentDay][currentLesson] = {}; // Ensure current lesson exists
      }

      // Store the new value (e.g., subject, proff, lab) in the correct nested structure
      user.schedule[currentDay][currentLesson][key] = msg.text;

      // Ensure the full lesson object structure is maintained
      if (
        key === "proff" &&
        !user.schedule[currentDay][currentLesson].subject
      ) {
        // If "proff" is set but "subject" doesn't exist, you might want to set a placeholder
        user.schedule[currentDay][currentLesson].subject = "Subject not set"; // Adjust as necessary
      }

      setUser(chatId, user); // Save the updated user data
      resolve(); // Continue execution

      console.log(
        `Updated user object after receiving ${key}:`,
        JSON.stringify(user, null, 2)
      ); // Log the full user object clearly
    });
  });
};

module.exports = { waitForText };
