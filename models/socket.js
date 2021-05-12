class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    // on connection
    this.io.on('connection', (socket) => {
      // escuchar evento: message-to-server
      socket.on('message-to-server', (data) => {
        console.log(data);
        this.io.emit('message-from-server', data);
      });
    });
  }
}

module.exports = Sockets;
