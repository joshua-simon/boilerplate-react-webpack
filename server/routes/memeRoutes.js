const express = require('express')

const db = require('../db/memes.js')

const router = express.Router()

router.get('/', (req,res) => {
  db.getMemes()
  .then(memeyData => {
    // console.log(memeyData)
    res.json(memeyData)
  })

})

module.exports = router