const { Kitchens } = require('../db/models');
const { Food } = require('../db/models');
const { Foodstores } = require('../db/models');

module.exports = {
  landing(req, res, next) {
    res.redirect('/api'); // redirect to working route/URL
  },
  staticQuery(req, res, next) {
    Kitchens.findAll()
      // Query Kitchens table for all records
      .then(_kitchens => {
        this._kitchens = _kitchens;
        Food.findAll()
          .then(food => {
            this.food = food;
            Foodstores.findAll()
              .then(transactions => {
                let _transaction = transactions.filter(
                  transaction => transaction.quantity > 0
                );
                _transaction = _transaction.sort((a, b) => {
                  return a.id - b.id;
                });
                this._transaction = _transaction;
                const resObj = {
                  kitchens: this._kitchens,
                  food: this.food,
                  transactions: this._transaction,
                };
                res.send(resObj);
              })
              .catch(err => {
                console.log(err);
                res.send(404);
              });
          })
          .catch(err => {
            console.log(err);
            res.send(500);
          });
      })
      .catch(err => {
        console.log(err);
        res.send(404);
      });
  },
};
