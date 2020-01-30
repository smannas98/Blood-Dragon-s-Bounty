const express = require("express");
const appConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config.js");

const app = express();

appConfig.init(app, express);
routeConfig.init(app);

<<<<<<< HEAD
module.exports = app;
=======
module.exports = app;
>>>>>>> e4bfb8e1a45901636a249183e19dccd8bbcec711
