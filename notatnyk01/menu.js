const bot = require("./bot.js");
const schedule = require('./schedule/schedule.js')

const start = (chatId) => {
  const rep = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "додати розклад ✒️", callback_data: "add" },{ text: "редагувати розклад ✍", callback_data: "edit" }],
        [{ text: "додати нотатку ✏️", callback_data: "note" }],
        
      ],
    }),
  };

  bot.sendMessage(chatId, "- Я живий!!!\nдовго ж я був вимкнутим...");
  bot.sendPhoto(chatId, "./assets/botpic v1.jfif", {
    caption:
      "Я Нотатник 01. 🤖 \nЯ створений щоб допомогти тобі організувати свої записки і розклад.",
    reply_markup: rep.reply_markup,
  });
};

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  
  if (text == "/start") {
    start(chatId);
  }
});


bot.on('callback_query', async (msg)=>{
   const chatId = msg.message.chat.id;
  if(msg.data == "add"){
    schedule()
  }
})
