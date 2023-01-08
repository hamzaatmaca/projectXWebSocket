const express = require("express");
const WebSocket = require("ws");
const app = express();
const http = require("http");
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

//Modules
const socket = require("./socket/socket");

//ENV File
require("dotenv").config();

//PORT
const PORT = process.env.PORT || 8080;

socket(wss);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
