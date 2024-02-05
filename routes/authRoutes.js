const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/login', authController.login);
router.get('/secure-route', authMiddleware.authenticateUser, (req, res) => {
  res.json({ message: 'Route sécurisée' });
});

module.exports = router;
