const express = require('express');
const router = express.Router();
const employeController = require('../controllers/employees.controller');

router.post('/', employeController.create);

module.exports = router;