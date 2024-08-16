import express from 'express';
import { WebSocketServer, WebSocket } from 'ws';

const app = express();
const httpServer = app.listen(8080);

let counter = 0;
app.get('/', (req, res) => {
  res.send('You are at the websocket server');
  console.log("Connection", counter++);
});

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', function connection(wsclient) {
  console.log('A new client connected!');
  
  wsclient.on('error', console.error);

  wsclient.on('message', function message(data, isBinary) {
    console.log("Client: ", String(data));

    // Broadcast the message to all connected clients , except the one that sent the message (current client)
    wss.clients.forEach(function each(client) {
      if (client !== wsclient && client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  // Send a welcome message to the client
  wsclient.send('Hello! Message From Server!!');
});
