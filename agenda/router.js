const express = require('express');
const router = express.Router();

const homeController = require('./src/controller/homeController');
const loginController = require('./src/controller/loginController');

//home
router.get('/', homeController.index);

//login
router.get('/login', loginController.index);
router.post('/login/register', loginController.register);

module.exports = router;
