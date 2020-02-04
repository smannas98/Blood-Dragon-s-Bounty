const express = require('express');
const { Kitchens } = require('../db/models');
const { Foodstores } = require('../db/models');
const { Food } = require('../db/models');

const router = express.Router();

router.get('/api/:id', (req, res, next) => {
  Kitchens.findOne({ where: { id: req.params.id } })
    // Query kitchen table for record id matching URL
    .then(kitchen => {
      this.kitchen = kitchen;
      // store found record as usable variable
      Foodstores.findAll({ where: { kitchenId: this.kitchen.id } })
        // Query Foodstores table for all records that have kitchenId matching found record id
        .then(transactions => {
          this.transactions = transactions;
          // store array of found records as usable variable
          Food.findAll()
            // Query Food table for all records
            .then(_food => {
              this._food = _food;
              // store found records as usable variable
              const Obj = {
                // scaffold Object that will be sent to client
                kitchen: this.kitchen,
                Transactions: this.transactions,
                Food: this._food,
              };
              res.send(Obj); // send all data to client
            })
            .catch(err => {
              // in event of error, do this:
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

router.post('/api/:id', (req, res, next) => {
  const newRecords = req.body; // store incoming body as usable variable
  for (let [key, value] of Object.entries(newRecords)) {
    // Loop through incoming body, for each key/value pair, do this:
    const newKey = parseInt(key, 10); // set 'key' as integer
    Foodstores.findOne({
      where: { kitchenId: req.params.id, foodId: newKey },
    }) // Query Foodstores table for record that matches kitchenId and foodId
      .then(record => {
        record
          .update({
            quantity: value,
          }) // update found record's quantity value with 'value' from key/value pair of clientside Object
          .then(() => {
            record.save();
            // save the modification, this alerts the DB that a change was made and updates accordingly
          })
          .catch(err => {
            console.log(err);
            res.send(500);
          });
      })
      .catch(err => {
        console.log(err);
        res.send(500);
      });
  }
});

module.exports = router; // EXPORT!! =D
