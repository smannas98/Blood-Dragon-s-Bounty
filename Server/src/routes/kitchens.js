const express = require('express');
const { Kitchens } = require('../db/models');

const router = express.Router();

router.get('/:id', (req, res, next) => {
    Kitchens.findAll({ where: { id: req.params.id }})
    .then((kitchen) => {
        console.log(kitchen);
        res.send(kitchen[0]);
    }).catch((err) => {
        console.log(err);
        res.send(404);
    })
});

// router.post('/:id', (req, res, next) => {
//     Kitchens.findAll({ where: { id: req.params.id }}.then((kitchen) => {
//         kitchen.update(req.body);
//         res.send(kitchen);
//     }))
// })

module.exports = router;