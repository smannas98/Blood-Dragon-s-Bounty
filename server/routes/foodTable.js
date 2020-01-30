const express = require("express");
const { foodTables } = require("../db/models/");
const router = express.Router();

router.get("/foodTable", (re, res, next) => {
  foodTables
    .findAll()
    .then(foodtableItems => {
      res.json(foodtableItems);
    })
    .catch(err => {
      console.log(err);
      console.log("this is and error");
    });
});

module.exports = router;
