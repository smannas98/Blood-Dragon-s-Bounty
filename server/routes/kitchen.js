const express = require("express");
const { kitchen } = require("../db/models/");

const router = express.Router();

router.get("/kitchen", (re, res, next) => {
  kitchen
    .findAll()
    .then(kitchenItems => {
      res.json(kitchenItems);
    })
    .catch(err => {
      console.log(err);
      console.log("this is and error");
    });
});

module.exports = router;
