const express = require("express");
const mainConfig = require("./config/main-config.js");
const routesConfig = require("./config/route-config.js");
const app = express();

mainConfig.init(app, express);
routesConfig.init(app);

module.exports = app;
