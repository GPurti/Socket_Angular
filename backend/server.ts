import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('message', (message) => {
    console.log('message received: ' + message);
    io.emit('message', message); //canviar per to
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
app.get('/',(req,res)=>{
    res.send('<h1>Hey</h1>')
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});