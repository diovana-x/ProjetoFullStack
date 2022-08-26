function init(req, res) {
    res.send(200, { message: "User's route!" });
}

module.exports = { init };

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