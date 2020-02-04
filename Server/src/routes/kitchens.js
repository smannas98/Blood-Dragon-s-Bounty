const express = require('express')
const { Kitchens } = require('../db/models')
const { Foodstores } = require('../db/models')
const { Food } = require('../db/models')

const router = express.Router()

router.get('/api/:id', (req, res, next) => {
  Kitchens.findOne({ where: { id: req.params.id } })
    .then(kitchen => {
      this.kitchen = kitchen
      Foodstores.findAll({ where: { kitchenId: this.kitchen.id } })
        .then(transactions => {
          // returns array of all food/kitchen transactions where kitchenId = kitchen.id
          this.transactions = transactions
          Food.findAll()
            .then(_food => {
              this._food = _food
              const Obj = {
                kitchen: this.kitchen,
                Transactions: this.transactions,
                Food: this._food,
              }
              res.send(Obj)
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
})

// router.post('/:id', (req, res, next) => {
//   Foodstores.findAll({ where: { kitchenId: req.params.id } }).then(
//     transactions => {
//       this.transactions = transactions
//       var doug = req.body
//       Object.keys(doug).map(dougNames => {
//         let updateMe = transaction.dougNames
//         let updateTo = dougNames.value

//         if (updateMe === updateTo) {
//           Foodstores.update()
//         }
//         transactions.find(dougNames).then(updatedTransaction => {
//           Foodstores.update(updatedTransaction)
//         })
//       })
//     }
//   )
// })

// router.post('/:id', (req, res, next) => {
//   Foodstores.findAll({
//     where: { kitchenId: req.params.id },
//   }).then(records => {
//     this.records = records;
//     const newRecords = req.body;
//     for (let [key, value] of Object.entries(newRecords)) {
//       const result = this.records.find(({ foodId }) => foodId === key);
//     }
//   })
// })

router.post('/api/:id', (req, res, next) => {
  const newRecords = req.body
  for (let [key, value] of Object.entries(newRecords)) {
    const newKey = parseInt(key, 10)
    Foodstores.findOne({
      where: { kitchenId: req.params.id, foodId: newKey },
    })
      .then(record => {
        console.log('THIS IS FOODSTORES RECORD' + record)
        record
          .update({
            quantity: value,
          })
          .then(() => {
            res.send(200)
          })
          .catch(err => {
            console.log(err)
            res.send(500)
          })
      })
      .catch(err => {
        console.log(err)
        res.send(500)
      })
  }
})

module.exports = router

var Obj = {
  '1': 0,
  '2': 1,
  '3': 0,
  '4': 2,
  '5': 1,
  '6': 2,
  '7': 1,
}
