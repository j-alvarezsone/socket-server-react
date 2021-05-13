const BandList = require('./band-list');

class Sockets {
  constructor(io) {
    this.io = io;
    this.bandList = new BandList();

    this.socketEvents();
  }

  socketEvents() {
    // on connection
    this.io.on('connection', (socket) => {
      console.log('Cliente conectado');

      // emitir al cliente conectado, todas las bandas actuales
      socket.emit('current-bands', this.bandList.getBands());
    });
  }
}

module.exports = Sockets;
