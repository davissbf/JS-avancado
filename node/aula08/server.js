const express = require('express');

const server = express();

server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
  res.send(`<form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>`);
});

server.get('/catilanga/:clientId?/:parametro?', (req, res) => {
  const paramentros = req.params;
  const querys = req.query;
  console.log(paramentros);
  console.log(querys);
  res.send(querys.seilaprofile);
});

server.post('/', (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.nome}`);
});


server.listen(3000, () => {
  console.log("Server running!!⚡");
});
