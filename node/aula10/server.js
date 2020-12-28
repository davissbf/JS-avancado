const express = require('express');
const router = require('./router');

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(router);

server.listen(3000, () => {
  console.log("Server running!!⚡");
});
