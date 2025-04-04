// websocket.js
const WebSocket = require('ws');

// Cria uma instância do WebSocket Server
const wss = new WebSocket.Server({ noServer: true }); // 'noServer: true' permite que você anexe o WebSocket a um servidor HTTP existente

// Exporta o wss para ser usado em outros arquivos
module.exports = wss;