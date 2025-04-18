const express = require('express');
const { registerUser, loginUser, getUserDetails, purchaseMovie } = require('../controllers/userController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', authenticate, getUserDetails);
router.post('/purchase', authenticate, purchaseMovie);

module.exports = router;