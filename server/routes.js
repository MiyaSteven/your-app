'use strict';

const superagent = require('superagent');
const client = require('./database');

function homePageHandler(request, response){
  console.log('working');
}

module.exports = { homePageHandler, };
