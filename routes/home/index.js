const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Homepage !')
})

router.get('/:slug', (req, res) => {
  res.send('Hello slug !')
})

module.exports = router;