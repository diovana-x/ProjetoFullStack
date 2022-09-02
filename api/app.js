'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors

// Rotas
const index_rotas = require('./rota/index');
const usuario_rotas = require('./rota/usuario');

// Carregar Rotas
app.use(index_rotas);
app.use(usuario_rotas);

// Exportações
module.exports = app;