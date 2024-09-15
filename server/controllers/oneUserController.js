const {
  successResponse,
  errorResponse,
} = require("../utils/responseFormatter");
const oneUserService = require("../services/oneUserService");

exports.GetOneUser = async (req, res) => {
  try {
    const oneUser = await oneUserService.GetOneUser();
    return res
      .status(200)
      .json(
        successResponse(oneUser, "Надіслав тобі дані по цьому користувачу")
      );
  } catch (error) {
    return res
      .status(500)
      .json(errorResponse(error, "get one user errrorororo "));
  }
};

exports.postOneUser = async (req, res) => {
  try {
    const { userData } = req.body;

    const oneUser = await oneUserService.postOneUser(userData);
    return res
      .status(200)
      .json(successResponse(oneUser, "Додав нового користувача"));
  } catch (error) {
    return res
      .status(500)
      .json(errorResponse(error, "post one user errrorororo "));
  }
};
