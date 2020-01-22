const express = require('express');
const { Kitchens } = require('../db/models');

const router = express.Router();

router.get('/', (req, res, next) => {
   Kitchens.findAll()
    .then(_kitchens => {  
        res.send(_kitchens[0]);
    }).catch((err) => {
        console.log(err);
        res.send(404);
    });
});

module.exports = router;