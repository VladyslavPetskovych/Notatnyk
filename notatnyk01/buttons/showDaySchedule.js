const bot = require("../bot");
const getSchedule = require("../utils/getSchedule");
const { getUser, setUser } = require("../utils/userCache");
const { showOddOrEven, getWeekKeyboard } = require("./showSchedule");

const showDaySchedule = async (chatId, msgId, day) => {
  const user = await getSchedule(chatId);
  let userCache = await getUser(chatId);

  if (!userCache) {
    userCache = { isOdd: user.schedule.isOdd };
    await setUser(chatId, userCache);
  }

  const schedule = user.schedule;
  let daySchedule;

  if (userCache.isOdd) {
    if (!schedule.oddWeek || !schedule.oddWeek[day]) {
      bot.editMessageText(`Розклад на ${day} відсутній.`, {
        chat_id: chatId,
        message_id: msgId,
        reply_markup: getWeekKeyboard(userCache.isOdd).reply_markup,
      });
      return;
    }
    daySchedule = schedule.oddWeek[day];
  } else {
    if (!schedule.evenWeek || !schedule.evenWeek[day]) {
      bot.editMessageText(`Розклад на ${day} відсутній.`, {
        chat_id: chatId,
        message_id: msgId,
        reply_markup: getWeekKeyboard(userCache.isOdd).reply_markup,
      });
      return;
    }
    daySchedule = schedule.evenWeek[day];
  }

  if (daySchedule) {
    const lessons = Object.entries(daySchedule)
      .map(([lessonKey, lessonInfo]) => {
        let emoji;
        let time;
        switch (lessonKey) {
          case "first":
            emoji = "1️⃣";
            time = "8:30 - 10:05";
            break;
          case "second":
            emoji = "2️⃣";
            time = "10:20 - 11:55";
            break;
          case "third":
            emoji = "3️⃣";
            time = "12:10 - 13:45";
            break;
          case "fourth":
            emoji = "4️⃣";
            time = "14:30 - 16:05";
            break;
          case "fifth":
            emoji = "5️⃣";
            time = "16:20 - 17:35";
            break;
          default:
            emoji = "";
            time = "";
        }
        return `${emoji} - ${lessonInfo.subject},\n⏱${time}\n👨‍🏫 - ${lessonInfo.professor},\n🏫 - ${lessonInfo.lab}`;
      })
      .join("\n\n");

    bot.editMessageText(`Розклад на ${day}:\n${lessons}`, {
      chat_id: chatId,
      message_id: msgId,
      reply_markup: getWeekKeyboard(userCache.isOdd).reply_markup,
    });
  }
};

module.exports = showDaySchedule;
