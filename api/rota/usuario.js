"user strict"

const express = require('express');
const UsuarioControle = require('../controle/usuario');

const router = express.Router();

router.get('/usuario', UsuarioControle.inicio);
router.get('/usuario/teste', UsuarioControle.teste);

module.exports = router;