const express = require('express');
const { Signupdata } = require("../controllers/authController"); // Destructure correctly

const router = express.Router();

router.post('/Signup', Signupdata); // Use the function directly

module.exports = router;
