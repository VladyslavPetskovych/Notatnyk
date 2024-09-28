const bot = require("../bot");

const userSchedules = new Map();


const editScheduleMarup = {
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
        { text: "знаменник", callback_data: "edit_even" },
      ],
      [
        { text: "зберегти зміни", callback_data: "save" },
        { text: "видалити", callback_data: "delete" },
      ],
    ],
  }),
};

const editMarkupDay = {
  inline_keyboard: [
    [
      { text: "1️⃣", callback_data: "lesson1" },
    ],
    [
      { text: "2️⃣", callback_data: "lesson2" },
    ],
    [
      { text: "3️⃣", callback_data: "lesson3" },
    ],
    [
      { text: "4️⃣", callback_data: "lesson4" },
    ],
    [
      { text: "5️⃣", callback_data: "lesson5" },
    ],
    [    { text: "Назад", callback_data: "edit_back_to_week" },]
  ],
};



const selectedDay = async (chatId, msgId, day) => {
  await bot.editMessageText("Запишіть окремо інформацію по кожній парі", {
    chat_id: chatId,
    message_id: msgId,
  });
  await bot.editMessageReplyMarkup(editMarkupDay, {
    chat_id: chatId,
    message_id: msgId,
  });
  console.log("selectedDay", chatId, msgId, day);
};

const selectedWeek = (week) => {
  console.log("selectedDay");
};



module.exports = {selectedDay, editScheduleMarup };
