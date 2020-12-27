const express = require('express');

const server = express();

server.use(express.urlencoded({ extended: true }));

server.listen(3000, () => {
  console.log("Server running!!⚡");
});
