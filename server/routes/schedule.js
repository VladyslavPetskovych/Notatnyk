const express = require("express");
const router = express.Router();
const scheduleController = require("../controllers/scheduleController");

router.get("/:chatId", scheduleController.getSchedule);
router.post("/newSchedule", scheduleController.postSchedule);

module.exports = router;
