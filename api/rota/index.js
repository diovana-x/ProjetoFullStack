const express = require('express');
const router = express.Router();
const index = require('../controle/index');

router.get('/', index.inicio);

router.get('/teste', index.teste);

module.exports = router;