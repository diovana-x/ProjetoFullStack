'use strict';

const Usuario = require('../modelos/usuarios');

function inicio(req, res) {
    res.status(200).send({
        nome: 'Diovana',
        idade: '18',
        apelido: 'baxinha',
    });
}

function teste(req, res) {
    res.status(200).send({
        message: 'Testando rotas',
    });
}

module.exports = {
    inicio,
    teste
}

/* 'use strict'

var Usuario = require('../models/usuarios');

function inicio(req, res) {
    res.status(200).send({
        message: 'Hello word!'
    });
};

function teste(req, res) {
    res.status(200).send({
        message: 'Testing node server!'
    });
};

module.exports = {
    inicio,
    teste
} */