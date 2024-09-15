const express = require("express");
const router = express.Router();
const OneUserController = require("../controllers/oneUserController");

// Шляхи для роботи з користувачами
router.get("/oneUser/:idC", OneUserController.GetOneUser);
router.post("/newUser/", OneUserController.postOneUser);

module.exports = router;
