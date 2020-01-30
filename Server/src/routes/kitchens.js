const express = require("express");
const { Kitchens } = require("../db/models");
const { Foodstores } = require("../db/models");
const { Food } = require("../db/models");

const router = express.Router();

router.get("/:id", (req, res, next) => {
  Kitchens.findOne({ where: { id: req.params.id } })
    .then(kitchen => {
      this.kitchen = kitchen;
      Foodstores.findAll({ where: { kitchenId: this.kitchen.id } })
        .then(transactions => {
          // returns array of all food/kitchen transactions where kitchenId = kitchen.id
          this.transactions = transactions;
          Food.findAll()
            .then(_food => {
              this._food = _food;
              const Obj = {
                kitchen: this.kitchen,
                Transactions: this.transactions,
                Food: this._food
              };
              res.send(Obj);
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
