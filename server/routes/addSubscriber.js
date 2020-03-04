const express = require('express')
const router = express.Router()
const request = require('superagent')

router.use(express.json())

router.post('/', (req, res) => {
  return request
    .post('https://api.mailerlite.com/api/v2/groups/94576382/subscribers')
    .set('X-Mailerlite-Apikey', 'e24fe24b21d8fbcfea4582797ee8e99d')
    .set('Content-Type', 'application/json')
    .send(req.body)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(() => {
      res.status(500).send('We had a problem adding you to our subscribers')
    })
})

module.exports = router
