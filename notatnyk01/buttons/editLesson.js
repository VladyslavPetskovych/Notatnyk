const bot = require("../bot");
const { getUser, setUser } = require('../utils/userCache');

const editMarkupLesson = {
  inline_keyboard: [
    [
      { text: "предмет", callback_data: "subject" },
      { text: "Викладач", callback_data: "proff" },
      { text: "аудиторія", callback_data: "lab" },
    ],
    [{ text: "Назад", callback_data: "edit_back_to_time" }],
  ],
};

const editLesson = async (chatId, msgId, userChoice) => {
  console.log("editLesson спрацювало", chatId, msgId, userChoice);

  await bot.editMessageText("Заповніть інформацію про день", {
    chat_id: chatId,
    message_id: msgId,
  });

  await bot.editMessageReplyMarkup(editMarkupLesson, {
    chat_id: chatId,
    message_id: msgId,
  });

};

module.exports = editLesson;
