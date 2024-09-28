const bot = require("../bot");
const { editScheduleMarupOdd, editScheduleMarupEven } = require("./editWeek");

const schedule = "  xxx";
let lmsgId = 0;

const editSchedule = async (chatId, msgId, isOdd) => {
  if (lmsgId === msgId) {
    console.log(lmsgId);
    console.log(lmsgId);
    console.log(lmsgId);

    const markup = isOdd ? editScheduleMarupOdd : editScheduleMarupEven;
    await bot.editMessageText(
      `Виберіть день і пару щоб додати його.\n \n\n${schedule}`,
      {
        chat_id: chatId,
        message_id: msgId,
        reply_markup: markup.reply_markup,
      }
    );
  } else {
    const sentMessage = await bot.sendMessage(
      chatId,
      `Виберіть день і пару щоб додати його.\n \n\n${schedule}`,
      editScheduleMarupOdd
    );
    lmsgId = sentMessage.message_id;
  }
};

module.exports = editSchedule;
