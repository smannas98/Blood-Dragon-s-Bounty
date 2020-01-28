const express = require('express');
const { Kitchens } = require('../db/models');
const { Foodstores } = require('../db/models');
const { Food } = require('../db/models');

const router = express.Router();

// router.get('/:id', (req, res, next) => {
//     Kitchens.findOne({ where: { id: req.params.id }})
//     .then((kitchen) => {
//         console.log(Array.isArray(kitchen));
//         res.send(kitchen);
//     }).catch((err) => {
//         console.log(err);
//         res.send(404);
//     })
// });
// router.post('/:id', (req, res, next) => {
//     Kitchens.findAll({ where: { id: req.params.id }}.then((kitchen) => {
//         kitchen.update(req.body);
//         res.send(kitchen);
//     }))
// })

router.get('/:id', (res, res, next) => {
    Kitchens.findOne({ where: { id: req.params.id }})
    .then((kitchen) => {
        this.kitchen = kitchen;
        Foodstores.findAll({ where: { kitchenId: this.kitchen.id}})
        .then((transactions) => {
            // returns array of all food/kitchen transactions where kitchenId = kitchen.id
            this.transactions = transactions;
            Food.findAll()
            .then((_food) => {
                this._food = _food;
                const Arr = [this.kitchen, this.transactions, this._food];
                res.send(Arr);
            })
        })
    })
})

module.exports = router;