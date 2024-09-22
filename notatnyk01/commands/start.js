const bot = require("../bot");
const addNewUser = require("../utils/addNewUser");
const userData = require("../utils/userCache");

const start = (chatId, name) => {
  const rep = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: "Ваш розклад ✒️", callback_data: "mySchedule" },
          { text: "редагувати розклад ✍", callback_data: "edit" },
        ],
        [{ text: "додати нотатку ✏️", callback_data: "note" }],
      ],
    }),
  };

  addNewUser(chatId, name);

  bot.sendMessage(chatId, "- Я живий!!!\nдовго ж я був вимкнутим...");
  bot.sendPhoto(chatId, "./assets/botpic v1.jfif", {
    caption:
      "Я Нотатник 01. 🤖 \nЯ створений щоб допомогти тобі організувати свої записки і розклад.",
    reply_markup: rep.reply_markup,
  });
};

module.exports = start;
