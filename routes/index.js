const express = require('express');
const router = express.Router();
// const app = express();
const home = require('./home');
const login = require('./login');

router.use('/login', login);
router.use('/home', home);

router.get('/', (req, res) => {
  res.send('OK')
})

module.exports = router;