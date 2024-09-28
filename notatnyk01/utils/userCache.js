const userMap = {};
const getUser = (chatId) => {
  const user = userMap[chatId];
  console.log(`getUser: Chat ID: ${chatId}, User Data:`, user);
  return user;
};

const setUser = (chatId, key, value) => {
  const user = getUser(chatId) || { chatId, schedule: {} };

  user[key] = value;

  userMap[chatId] = user;
  console.log(
    `setUser: Chat ID: ${chatId}, Updated User Data:`,
    userMap[chatId]
  );
};

const setLessonData = (chatId, day, lesson, key, value) => {
  const user = getUser(chatId) || { chatId, schedule: {} };

  // Initialize the day and lesson structure if it doesn't exist
  if (!user.schedule[day]) {
    user.schedule[day] = {};
  }
  if (!user.schedule[day][lesson]) {
    user.schedule[day][lesson] = {};
  }

  // Set the specific key-value pair (e.g., subject, proff, lab) in the lesson
  user.schedule[day][lesson][key] = value;

  // Save the updated user data
  userMap[chatId] = user;
  console.log(
    `setLessonData: Chat ID: ${chatId}, Updated User Data:`,
    userMap[chatId]
  );
};

const removeUser = (chatId) => {
  delete userMap[chatId];
  console.log(`removeUser: Removed user for Chat ID: ${chatId}`);
};

module.exports = {
  getUser,
  setUser,
  setLessonData,
  removeUser,
};
