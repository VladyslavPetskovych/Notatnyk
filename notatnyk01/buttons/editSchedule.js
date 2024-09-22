const bot = require("../bot");
const {editScheduleMarup} = require("./editDay");


const schedule = '  xxx' 


const editSchedule = async (chatId, msgId) => {
  bot.sendMessage(
    chatId,
    `Виберіть день і предмет щоб додати його або змінити.\n Щоб видалити запис, виберіть запис і надішліть - В \n\n${schedule}`,
    editScheduleMarup
  );
  await bot.answerCallbackQuery(msgId);
};

module.exports = editSchedule;
