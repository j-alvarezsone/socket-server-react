// servidor de express
const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config();
// servidor de sockets
const server = require('http').createServer(app);

// configuración del socket server
const io = require('socket.io')(server);

// desplegar el directorio publico
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  socket.emit('mensaje-bienvenida', {
    msg: 'Bienvenido al server',
    fecha: new Date(),
  });

  socket.on('mensaje-cliente', (data) => {
    console.log(data);
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
