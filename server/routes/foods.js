const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/:month', (req, res) => {
  const month = Number(req.params.month)
  return db.getInSeasonFoods(month)
    .then(foods => {
      if (foods === undefined) {
        res.sendStatus(404)
      } else {
        res.json(foods)
      }
    })
    .catch(() => {
      res.status(500).send('We had a problem getting in season foods. You can try refreshing the page.')
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  return db.getFoodDetails(id)
    .then(details => {
      if (details === undefined) {
        res.sendStatus(404)
      } else {
        res.json(details)
      }
    })
})

module.exports = router
