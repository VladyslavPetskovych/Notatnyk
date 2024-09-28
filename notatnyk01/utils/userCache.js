const userMap = {};
const getUser = (chatId) => {
  const user = userMap[chatId];
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

 
  if (!user.schedule[day]) {
    user.schedule[day] = {};
  }
  if (!user.schedule[day][lesson]) {
    user.schedule[day][lesson] = {};
  }

  user.schedule[day][lesson][key] = value;

  userMap[chatId] = user;
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
