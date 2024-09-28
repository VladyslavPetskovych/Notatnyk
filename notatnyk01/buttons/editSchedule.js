const bot = require("../bot");
const { editScheduleMarup } = require("./editDay");

const schedule = "  xxx";
let lmsgId = 0;

const editSchedule = async (chatId, msgId) => {
  
  if (lmsgId === msgId) {
    console.log(lmsgId);
    console.log(lmsgId);
    console.log(lmsgId);
    await bot.editMessageText(
      `Виберіть день і предмет щоб додати його або змінити.\n Щоб видалити запис, виберіть запис і надішліть - В  \n\n${schedule}`,
      {
        chat_id: chatId,
        message_id: msgId,
        reply_markup: editScheduleMarup.reply_markup, 
      }
    );

  } else {
    const sentMessage = await bot.sendMessage(
      chatId,
      `Виберіть день і предмет щоб додати його або змінити.\n Щоб видалити запис, виберіть запис і надішліть - В \n\n${schedule}`,
      editScheduleMarup
    );
    lmsgId = sentMessage.message_id;
  }
};

module.exports = editSchedule;
