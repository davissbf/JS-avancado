const express = require('express');
const router = express.Router();

const homeController = require('./src/controller/homeController');
const loginController = require('./src/controller/loginController');

router.get('/', homeController.index);
router.get('/login', loginController.index);

module.exports = router;
