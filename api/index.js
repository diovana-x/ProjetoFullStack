const express = require("express");
const router = express.Router();
const { init, test } = require("../controle/index");

router.get("/", init);

router.get("/testing", test);

module.exports = router;

/* 'use_strict'

var mongoose = require('mongoose');

// Conexão com o banco de dados
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/projeto-web-fullstack')//, { useMongoClient: true }
    .then(() => {
        console.log("++ Conexão realizada com sucesso!")
    })
    .catch(err => console.log(err));
 */