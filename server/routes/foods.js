const express = require('express')
const router = express.Router()
const db = db

router.get('/', (req, res) => {
  return db
  .then(foods => res.status(200).json(foods))
})