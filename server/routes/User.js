const express = require('express');
const router = express.Router();

const { signup,verifyOtp,login } = require('../controllers/Auth');

router.post('/signup',signup);
router.post('/verify-email',verifyOtp);
router.post('/login',login);
module.exports = router;