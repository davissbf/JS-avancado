const express = require('express');
const router = express.Router();
const homeController = require('./controller/Homecontroller');

router.get('/', homeController.paginaInicial);
router.post('/', homeController.trataPost);

module.exports = router;