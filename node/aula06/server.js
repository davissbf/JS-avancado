const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`<form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>`);
});

server.

server.listen(3000, () => {
  console.log("Server running!!⚡");
});
