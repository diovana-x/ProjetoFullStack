'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = 3800;

// Conexão com o banco de dados
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/projeto-web-fullstack')
    .then(() => {
        console.log("++ Conexão realizada com sucesso!");

        // Criação do servidor
        app.listen(port, () => {
            console.log("Servidor em funcionamento: http://localhost:3800");
        });
    })
    .catch(err => console.log(err));