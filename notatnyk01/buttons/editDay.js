const bot = require("../bot");

const userSchedules = new Map();




const editMarkupDay = {
  inline_keyboard: [
    [
      { text: "1️⃣", callback_data: "edit_first" },
    ],
    [
      { text: "2️⃣", callback_data: "edit_second" },
    ],
    [
      { text: "3️⃣", callback_data: "edit_third" },
    ],
    [
      { text: "4️⃣", callback_data: "edit_fourth" },
    ],
    [
      { text: "5️⃣", callback_data: "edit_fifth" },
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



module.exports = {selectedDay };
