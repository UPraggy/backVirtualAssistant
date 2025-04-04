//INDEX.js
console.clear()
const express = require('express');
const routes = require('./routes');
// const serveStatics = require('./serveStatics');
const cors = require('cors');
const wss = require('./websocket'); // Importa o wss

const app = express();


// Configurar o middleware CORS antes de qualquer rota
app.use(cors());


app.use(express.json({
    limit: '10mb', // Definindo o limite de tamanho para 10MB (10000 bytes não faz muito sentido aqui, pois é um valor muito pequeno para JSON)
  }));
app.use(routes);
// serveStatics(app)

const server = app.listen(process.env.PORT || 3005, '0.0.0.0', () => {
    console.log(`Server running on port ${process.env.PORTASERVIDOR || 3005}`); // Confirme que o servidor está rodando
  });



// Anexa o WebSocket Server ao servidor HTTP
server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  });
