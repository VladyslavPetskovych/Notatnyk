const bot = require("../bot");
const getschedule = require("../utils/getSchedule");

// Загальна базова розмітка клавіатури
const baseKeyboard = [
  [
    { text: "Пн", callback_data: "monday" },
    { text: "Вт", callback_data: "tuesday" },
    { text: "Ср", callback_data: "wednesday" },
    { text: "Чт", callback_data: "thursday" },
    { text: "Пт", callback_data: "friday" },
  ],
];

// Функція для створення розмітки з обраним чисельником/знаменником
const getWeekKeyboard = (isOdd) => {
  const oddText = isOdd ? "чисельник ✔️✅" : "чисельник";
  const evenText = isOdd ? "знаменник" : "знаменник ✔️✅";

  return {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        ...baseKeyboard,
        [
          { text: oddText, callback_data: "odd" },
          { text: evenText, callback_data: "even" },
        ],
      ],
    }),
  };
};

// Показуємо розклад
const showSchedule = async (chatId, msgId) => {
  const userSchedule = await getschedule(chatId);

  // Використовуємо базову розмітку з чисельником за замовчуванням
  bot.sendMessage(
    chatId,
    `Оберіть день ${JSON.stringify(userSchedule)}}`,
    getWeekKeyboard(true) // За замовчуванням чисельник
  );
  console.log(msgId);
};

// Редагуємо тільки вибір між чисельником та знаменником
const showOddOrEven = async (chatId, msgId, isOdd) => {
  bot.editMessageReplyMarkup(getWeekKeyboard(isOdd).reply_markup, {
    chat_id: chatId,
    message_id: msgId,
  });
  console.log(msgId);
};

module.exports = { showSchedule, showOddOrEven,getWeekKeyboard };
