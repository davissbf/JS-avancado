require('dotenv').config();

const express = require('express');
const server = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.BASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Agora que a conxão ocorreu'))
  .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

const router = require('./router');
const path = require('path');

const helmet = require('helmet');
const csrf = require('csurf');

const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');
const { access } = require('fs');

server.use(helmet());

server.use(json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.resolve(__dirname, 'public')));

server.set('views', path.resolve(__dirname, 'src', 'views'));
server.set('view engine', 'ejs');

const sessionOptions = session({
  secret: '*&(#&*#&%*#(*&jsbjklfbjkls zs uiw uiagr   sgrk kakg1221546564458787879452112ú ´pá',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
server.use(sessionOptions);
server.use(flash());

server.use(csrf());
server.use(middlewareGlobal);
server.use(checkCsrfError);
server.use(csrfMiddleware);
server.use(router);

server.listen(3000, () => {
  console.log("Server running!!⚡");
});
