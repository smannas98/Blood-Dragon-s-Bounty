const express = require('express');
const { Kitchens } = require('../db/models');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.redirect('/api'); // redirect to working route/URL
});

router.get('/api', (req, res, next) => {
  Kitchens.findAll()
    // Query Kitchens table for all records
    .then(_kitchens => {
      // send array of all found records to the client
      res.send(_kitchens);
    })
    .catch(err => {
      console.log(err);
      res.send(404);
    });
});

module.exports = router;
