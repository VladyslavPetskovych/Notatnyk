const bot = require("../bot");

const editScheduleMarupOdd = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: "Пн", callback_data: "edit_monday" },
        { text: "Вт", callback_data: "edit_tuesday" },
        { text: "Ср", callback_data: "edit_wednesday" },
        { text: "Чт", callback_data: "edit_thursday" },
        { text: "Пт", callback_data: "edit_friday" },
      ],
      [
        { text: "чисельник ✔️", callback_data: "edit_odd" },
        { text: "знаменник", callback_data: "edit_even" },
      ],
      [
        { text: "зберегти зміни", callback_data: "save" },
        { text: "видалити", callback_data: "delete" },
      ],
    ],
  }),
};

const editScheduleMarupEven = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: "Пн", callback_data: "edit_monday" },
        { text: "Вт", callback_data: "edit_tuesday" },
        { text: "Ср", callback_data: "edit_wednesday" },
        { text: "Чт", callback_data: "edit_thursday" },
        { text: "Пт", callback_data: "edit_friday" },
      ],
      [
        { text: "чисельник", callback_data: "edit_odd" },
        { text: "знаменник ✔️", callback_data: "edit_even" },
      ],
      [
        { text: "зберегти зміни", callback_data: "save" },
        { text: "видалити", callback_data: "delete" },
      ],
    ],
  }),
};



function editWeek(chatId, msgId, isOdd) {
    const markup = isOdd ? editScheduleMarupOdd : editScheduleMarupEven;
  
    return bot.editMessageReplyMarkup({
      chat_id: chatId,
      message_id: msgId,
      reply_markup: markup.reply_markup,
    });
  }

module.exports = editWeek;
