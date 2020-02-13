const express = require('express');
const staticController = require('../controllers/staticController');

const router = express.Router();

router.get('/', staticController.landing);
router.get('/api', staticController.staticQuery);

module.exports = router;
