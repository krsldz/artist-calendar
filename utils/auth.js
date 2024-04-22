const jwt = require('jsonwebtoken');

const generateAccessToken = (userId) =>
  jwt.sign(userId, process.env.TOKEN_ACCESS_SECRET, { expiresIn: '1h' });
const generateRefreshToken = (userId) =>
  jwt.sign(userId, process.env.TOKEN_REFRESH_SECRET, { expiresIn: '10d' });

const generateUsername = (email) => {
  const data = email.split('@');
  return data[0];
};

module.exports = { generateAccessToken, generateRefreshToken, generateUsername };
