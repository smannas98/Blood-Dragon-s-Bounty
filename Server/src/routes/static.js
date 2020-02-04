const express = require('express')
const { Kitchens } = require('../db/models')

const router = express.Router()

router.get('/api', (req, res, next) => {
  Kitchens.findAll()
    .then(_kitchens => {
      console.log(Array.isArray(_kitchens))
      res.send(_kitchens)
    })
    .catch(err => {
      console.log(err)
      res.send(404)
    })
})

module.exports = router
