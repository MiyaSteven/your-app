'use strict';

const pageNotFoundHandler = (request, response) => {
  response.status(404).send('Page Not Found');
};

const errorHandler = (err, request, response) => {
  response.status(500).send(err.message);
};

module.exports = { pageNotFoundHandler, errorHandler, };
