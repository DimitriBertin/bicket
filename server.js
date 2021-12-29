const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 8000
const routes = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/', routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})