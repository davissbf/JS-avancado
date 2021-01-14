require('dotenv').config();

const express = require('express');
const server = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Agora que a conxão ocorreu'))
  .catch(e => console.log(e));

const router = require('./router');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');

server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.resolve(__dirname, 'public')));

server.set('views', path.resolve(__dirname, 'src', 'views'));
server.set('view engine', 'ejs');

server.use(meuMiddleware);
server.use(router);

server.listen(3000, () => {
  console.log("Server running!!⚡");
});
