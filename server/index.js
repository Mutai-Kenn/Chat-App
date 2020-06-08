const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Connection and disconnection through the
io.on("connection", (socket) => {
  console.log("There is a new connection");

  socket.on("join", ({ name, room }) => {
    console.log(name, room);
  });

  socket.on("disconnect", () => {
    console.log("A user has left");
  });
});

// Route middleware
app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
