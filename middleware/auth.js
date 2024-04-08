/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const { accessToken, refreshToken } = req.cookies;
  if (!accessToken && !refreshToken) return res.status(401).json({ error: 'Access denied' });

  try {
    const decoded = jwt.verify(accessToken, process.env.TOKEN_ACCESS_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    if (!refreshToken) {
      return res.status(401).json({ error: 'Access Denied. No refresh token provided' });
    }
    try {
      const decodedRefresh = jwt.verify(refreshToken, process.env.TOKEN_REFRESH_SECRET);
      req.user = decodedRefresh.user;
      next();
    } catch (err) {
      return res.status(400).json({ error: 'Invalid Token' });
    }
  }
}

module.exports = authenticateToken;
