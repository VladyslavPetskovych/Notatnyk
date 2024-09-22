const bot = require("../bot");

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
  bot.sendMessage(chatId, "Ваш наявний  розклад");
  console.log("AAAAAA");
  await bot.answerCallbackQuery(msgId);
};

module.exports = { mySchedule, scheduleMarup };
