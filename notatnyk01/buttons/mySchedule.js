const bot = require("../bot");
const getschedule = require("../utils/getSchedule");

const scheduleMarup = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: "Пн", callback_data: "monday" },
        { text: "Вт", callback_data: "tuesday" },
        { text: "Ср", callback_data: "wednesday" },
        { text: "Чт", callback_data: "thursday" },
        { text: "Пт", callback_data: "friday" },
      ],
      [
        { text: "чисельник", callback_data: "odd" },
        { text: "знаменник", callback_data: "even" },
      ],
    ],
  }),
};

const mySchedule = async (chatId, msgId) => {
  const userSchedule = await getschedule(chatId);
  console.log(userSchedule)
  bot.sendMessage(
    chatId,
    `Оберіть день ${JSON.stringify(userSchedule)}}`,
    scheduleMarup
  );
  console.log("AAAAAA");
  await bot.answerCallbackQuery(msgId);
};

module.exports = { mySchedule, scheduleMarup };
