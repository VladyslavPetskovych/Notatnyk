
const userMap = {}; 

const getUser = (chatId) => {
  return userMap[chatId];
};

const setUser = (chatId, userData) => {
  userMap[chatId] = userData;
};

const removeUser = (chatId) => {
  delete userMap[chatId];
};

module.exports = {
  getUser,
  setUser,
  removeUser,
};
