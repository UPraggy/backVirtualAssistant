//ROUTES.js
const express = require('express');
console.clear()
const routes = express.Router();


const buscaDadosModelo = require('./src/controllers/buscaDadosModelo')
const carregaModelo = require('./src/controllers/carregaModelo')


const controllersGET = {
  ModeloPerguntas: {REST : (req, res) => res.send({dados: carregaModelo.dados, treinaModelo: carregaModelo.treinaModelo})}

};

Object.keys(controllersGET).forEach(route => {
routes.get(`/${route}`, controllersGET[route].REST);
});


const controllers = {
    //Rota: require('./controllers/Rota.js')

    
  };
  
Object.keys(controllers).forEach(route => {
routes.post(`/${route}`, controllers[route].REST);
});



module.exports = routes;
