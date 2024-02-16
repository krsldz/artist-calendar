const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req?.headers?.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) res.status(401).json({ error: 'Access denied' });
  else {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) res.sendStatus(403);
      else {
        req.user = user;
      }
      next();
    });
  }
}

module.exports = authenticateToken;
