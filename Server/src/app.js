const express = require('express');
const appConfig = require('./config/main-config.js');

const app = express();

appConfig.init(app, express);

module.exports = app;