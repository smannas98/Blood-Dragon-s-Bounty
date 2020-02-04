const express = require('express');
const appConfig = require('./config/main-config.js');
const routeConfig = require('./config/route-config.js');

const app = express();

appConfig.init(app, express); // initialize the init callback from main-config.js
routeConfig.init(app); // initialize the init callback from route-config.js

module.exports = app;
