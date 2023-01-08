const WebSocket = require("ws");

module.exports = (wss) => {
  wss.on("connection", function connection(ws) {
    ws.on("message", function message(data, isBinary) {
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          console.log(data);
          client.send(data, { binary: isBinary });
        }
      });
    });
  });
};
