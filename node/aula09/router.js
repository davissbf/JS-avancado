const express = require('express');
const router = express.Router();
  
router.get('/', (req, res) => {
  res.send(`<form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>`);
});

router.get('/catilanga/:clientId?/:parametro?', (req, res) => {
  const paramentros = req.params;
  const querys = req.query;
  console.log(paramentros);
  console.log(querys);
  res.send(querys.seilaprofile);
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.nome}`);
});
