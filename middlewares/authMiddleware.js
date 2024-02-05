const jwt = require('jsonwebtoken');
const config = require('../config');

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token non fourni' });
  }

  jwt.verify(token, config.secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token non valide' });
    }
    req.user = user;
    next();
  });
};

module.exports = { authenticateUser };
