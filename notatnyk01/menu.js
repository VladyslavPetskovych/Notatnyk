const bot = require("./bot.js");
const { mySchedule } = require("./buttons/mySchedule");
const editSchedule = require("./buttons/editSchedule");
const { selectedDay } = require("./buttons/editDay");
const editLesson = require("./buttons/editLesson");
const { editWeek } = require("./buttons/editWeek");
const waitForText = require("./utils/userSelection");
const { getUser, setUser, removeUser } = require("./utils/userCache");
const saveSchedule = require("./utils/saveSchedule");
const start = require("./commands/start");

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
  const msgCallId = msg.id;
  const msgId = msg.message.message_id;
  const userChoice = msg.data;

  const user = getUser(chatId) || { isOdd: true };

  switch (userChoice) {
    case "mySchedule":
      mySchedule(chatId, msgCallId);
      break;
    case "edit":
      await editSchedule(chatId, msgCallId);
      break;
    case "edit_monday":
    case "edit_tuesday":
    case "edit_wednesday":
    case "edit_thursday":
    case "edit_friday":
      const selectedDayName = userChoice.replace("edit_", "");
      setUser(chatId, "currentDay", selectedDayName);
      selectedDay(chatId, msgId, userChoice);
      break;
    case "edit_first":
    case "edit_second":
    case "edit_third":
    case "edit_fourth":
    case "edit_fifth":
      const selectedLessonName = userChoice.replace("edit_", "");
      setUser(chatId, "currentLesson", selectedLessonName);
      editLesson(chatId, msgId, userChoice);
      break;

    case "subject":
      await bot.sendMessage(chatId, "Please enter the subject:");
      waitForText(chatId, "subject");
      break;
    case "professor":
      await bot.sendMessage(chatId, "Please enter the professor's name:");
      waitForText(chatId, "professor");
      break;
    case "lab":
      await bot.sendMessage(chatId, "Please enter the lab information:");
      waitForText(chatId, "lab");
      break;

    case "edit_back_to_time":
      selectedDay(chatId, msgId, userChoice);
      break;
    case "edit_back_to_week":
      await editSchedule(chatId, msgId, user.isOdd);
      break;
    case "save":
      saveSchedule(getUser(chatId));

      break;
    case "edit_odd":
      user.isOdd = true;
      setUser(chatId, "isOdd", true);
      await editWeek(chatId, msgId, true);

      break;
    case "edit_even":
      user.isOdd = false;
      setUser(chatId, "isOdd", false);
      await editWeek(chatId, msgId, false);

      break;
  }
  await bot.answerCallbackQuery(msg.id);
});
