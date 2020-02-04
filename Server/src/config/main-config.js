require('dotenv').config();
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

module.exports = {
  init(app, express) {
    // init callback function
    app.use(cors()); // enables Cross-Origin Resource Sharing
    app.use(bodyParser.json()); // Parse incoming JSON objects from Client
    app.use(bodyParser.urlencoded({ extended: true })); // parse URL request from Client
    app.use(logger('dev')); // ¯\_(ツ)_/¯
  },
};
