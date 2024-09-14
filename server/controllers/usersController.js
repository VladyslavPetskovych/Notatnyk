const userService = require('../services/usersService');
const { successResponse, errorResponse } = require('../utils/responseFormatter');

// Отримання списку користувачів
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).json(successResponse(users, 'Users retrieved successfully'));
    } catch (error) {
        return res.status(500).json(errorResponse(error, 'Error fetching users'));
    }
};