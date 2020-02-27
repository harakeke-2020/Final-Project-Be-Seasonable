const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/:month', (req, res) => {
  const month = Number(req.params.month)
  return db.getInSeasonFoods(month)
  .then(foods => res.status(200).json(foods))
})

module.exports = router