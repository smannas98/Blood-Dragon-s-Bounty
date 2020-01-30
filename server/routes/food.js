const express = require("express");
const { food } = require("../db/models/");
const router = express.Router();

router.get("/", (re, res, next) => {
  food
    .findAll()
    .then(foodItems => {
      res.json(foodItems);
    })
    .catch(err => {
      console.log(err);
      console.log("this is and error");
    });
});

module.exports = router;
