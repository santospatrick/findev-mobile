import socketio from 'socket.io-client';

const socket = socketio('http://localhost:3333', {
  autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction) {
  socket.on('newDev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  };

  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

module.exports = { connect, disconnect, subscribeToNewDevs };
