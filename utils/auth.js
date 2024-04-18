const jwt = require('jsonwebtoken');

const generateAccessToken = (username) =>
  jwt.sign(username, process.env.TOKEN_ACCESS_SECRET, { expiresIn: '1h' });
const generateRefreshToken = (username) =>
  jwt.sign(username, process.env.TOKEN_REFRESH_SECRET, { expiresIn: '10d' });

const generateUsername = (email) => {
  const data = email.split('@');
  return data[0];
};

module.exports = { generateAccessToken, generateRefreshToken, generateUsername };
