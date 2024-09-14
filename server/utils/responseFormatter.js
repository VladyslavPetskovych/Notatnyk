// Форматування успішної відповіді
const successResponse = (data, message) => {
  return {
    success: true,
    message: message,
    data: data,
  };
};

// Форматування відповіді з помилкою
const errorResponse = (error, message) => {
  return {
    success: false,
    message: message,
    error: error ? error.message : "Unknown error",
  };
};

module.exports = {
  successResponse,
  errorResponse,
};
