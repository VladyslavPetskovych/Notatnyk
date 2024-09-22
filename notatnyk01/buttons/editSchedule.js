const bot = require("../bot");
const {scheduleMarup} = require('./mySchedule')


const editSchedule = async (chatId, msgId) => {
  bot.sendMessage(chatId, "FFFFFFFFFFFFFF", scheduleMarup);
  await bot.answerCallbackQuery(msgId);
};

module.exports = editSchedule;
