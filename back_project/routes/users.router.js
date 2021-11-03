const express = require('express');
const userController = require('../controllers/user.controller');

router = express.Router();

router.post("/login", userController.login);

module.exports = router