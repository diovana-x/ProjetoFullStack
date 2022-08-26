'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Carregar Rotas
var usuario_rotas = require(/rota/usuario);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors

// Rotas
// importing routes
var indexRoutes = require("./routes/index");
var userRoutes = require("./routes/users");
// Loading routes
app.use(indexRoutes);
app.use(userRoutes);

/*app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hello word!'
    });
});

app.get('/testing', (req, res) => {
    res.status(200).send({
        message: 'Testing node server!'
    });
});*/

// Exportações
module.exports = app;