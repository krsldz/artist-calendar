const express = require('express');
const morgan = require('morgan');

const authenticateToken = require('../middleware/auth');

const serverConfig = (app) => {
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(authenticateToken);
};

module.exports = serverConfig;
