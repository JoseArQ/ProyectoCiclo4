const express = require('express');
const router = express.Router();
const employeController = require('../controllers/employees.controller');

router.post('/', employeController.create);
router.get('/', employeController.find);
router.get('/:id', employeController.findOne);

module.exports = router;