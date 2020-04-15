const express = require('express');
const helmet = require('helmet');

const cars = require('../cars/router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', cars);

module.exports = server;
