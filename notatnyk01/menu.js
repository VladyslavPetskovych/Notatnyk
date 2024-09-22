const bot = require("./bot.js");
const {mySchedule} = require("./buttons/mySchedule");
const editSchedule = require('./buttons/editSchedule')
const start = require("./commands/start.js");

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstName = msg.from.first_name;

  if (text == "/start") {
    start(chatId, firstName);
  }
});

bot.on("callback_query", async (msg) => {
  const chatId = msg.message.chat.id;
  const msgId = msg.id;
  const userChoice = msg.data;

  switch (userChoice) {
    case "mySchedule":
      mySchedule(chatId, msgId);
      break;
    case "edit":
      await editSchedule(chatId, msgId);
      break;
  }
});
