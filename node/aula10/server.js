const express = require('express');
const server = express();

const router = require('./router');
const path = require('path');

server.use(express.urlencoded({ extended: true }));

server.set('views', path(__dirname, 'src', 'views'));
server.set('view engine')

server.use(router);

server.listen(3000, () => {
  console.log("Server running!!⚡");
});
