const bot = require('../bot')

const schedule = (msgId)=>{
    bot.sendMessage(chatId, "додати новий розклад");
    console.log('AAAAAA');
} 

module.exports = schedule;