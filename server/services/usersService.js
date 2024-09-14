const Users = require('../models/usersModel');

// Отримати всіх користувачів
exports.getAllUsers = async () => {
    return await Users.find(); // Повертаємо всіх користувачів з бази
};

