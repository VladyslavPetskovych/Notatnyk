const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');


// Шляхи для роботи з користувачами
router.get('/', userController.getAllUsers);

module.exports = router;
