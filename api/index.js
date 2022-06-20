'use_strict'

var mongoose = require('mongoose');

// Conexão com o banco de dados
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/projeto web full stack'), 
{ useMongoClient: true } 
    .then(() => {
        console.log("++ Conexão realizada com sucesso!")
    })
    .catch(err => console.log(err));
