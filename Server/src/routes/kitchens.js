const express = require('express');
const kitchenController = require('../controllers/kitchenController');

const router = express.Router();

router.get('/api/:id', kitchenController.getKitchen);

router.post('/api/:id', kitchenController.updateKitchen);

module.exports = router; // EXPORT!! =D
