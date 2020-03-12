'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const client = require('./database');
// const helpers = require('./middleware.js');
// const routes = require('./routes');

// app.use(express.static('./public'));
// app.set('view engine', 'ejs');
// app.set('views', './server/views');

// app.get('/', routes.homePageHandler());
// app.use('*', helpers.pageNotFoundHandler());
// app.use(helpers.errorHandler());

function startServer(){
  let PORT = process.env.PORT || 3000;
  client.connect()
    .then(() => app.listen(PORT))
    .then(() => console.log(`Server listening on ${PORT}`))
    .catch(err => console.error(err));
}

module.exports = {
  server: app,
  start: startServer,
};
