const jwt = require('jsonwebtoken');

const generateAccessToken = (username) => jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '10h' });

const generateUsername = (email) => {
  const data = email.split('@');
  return data[0];
};

module.exports = { generateAccessToken, generateUsername };
