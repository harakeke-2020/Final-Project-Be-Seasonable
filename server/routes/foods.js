const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/:month', (req, res) => {
  return db.getInSeasonFoods(req.params.month)
  .then(foods => res.status(200).json(foods))
})