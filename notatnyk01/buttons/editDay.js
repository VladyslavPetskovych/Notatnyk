const bot = require("../bot");

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

bot.on("callback_query", async (msg) => {
  const chatId = msg.message.chat.id;
  const msgId = msg.id;
  const userChoice = msg.data;

  switch (userChoice) {
    case "edit_monday","edit_tuesday","edit_wednesday","edit_thursday","edit_friday":
        selectedDay(chatId,msgId,userChoice)
      break;
      case "edit_odd","edit_even":
        selectedWeek(chatId,msgId,userChoice)
      break;
  }
});

const selectedDay = (day) => {
    console.log("selectedDay")
};

const selectedWeek = (week) => {
    console.log("selectedDay")
};

const editLesson = (day, time) => {
  console.log("edit lesson");
};

module.exports = { editLesson, editScheduleMarup };
