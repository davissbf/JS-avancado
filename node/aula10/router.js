const express = require('express');
const router = express.Router();
const homeController = require('./src/controller/homeController');
const homeContato = require('./src/controller/contatoController');

router.get('/', homeController.paginaInicial);
router.post('/', homeController.trataPost);

router.get('/contato', homeContato.paginaInicial);

module.exports = router;
