const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config({ path: '../.env' });

const token = process.env.token;

const bot = new TelegramBot(token, {polling: true});

bot.setMyCommands([{ command: "/start", description: "Ввімкнути бота" }]);

module.exports = bot