require("dotenv").config();
const bodyParser = require("body-parser");
const logger = require("morgan");
// const expressValidator = require('express-validator')
// const session = require('express-session')
// const cookieParser = require('cookie-parser')
const cors = require("cors");

module.exports = {
  init(app, express) {
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    // app.use(cookieParser())
    // app.use(expressValidator());
    // app.use(
    //     session({
    //         secret: process.env.COOKIE_SECRET,
    //         resave: false,
    //         saveUninitialized: false,
    //         cookie: { maxAge: 1.21e9 },
    //     })
    // )
    app.use(logger("dev"));
  }
};
