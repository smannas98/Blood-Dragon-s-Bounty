const express = require("express");
const { kitchen } = require("../db/models");
const { foodTables } = require("../db/models");
const { food } = require("../db/models");
const router = express.Router();

router.get("/:id", (req, res, next) => {
  food.findOne({ where: { id: req.params.id } }).then(food => {
    this.food = food;
    foodTables
      .findAll({ where: { foodID: this.food.id } })
      .then(transactions => {
        // returns array of all food/kitchen transactions where kitchenId = kitchen.id
        this.transactions = transactions;
        kitchen.findAll().then(_kitchen => {
          this._kitchen = _kitchen;
          const Arr = [this.food, this.transactions, this._kitchen];
          res.send(Arr);
        });
      });
  });
});

module.exports = router;
