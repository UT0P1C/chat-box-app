//imports
const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const router = require("./router")

//configs
const app = express();
const server = http.createServer(app);
const io = socketio(server);

//socket io connection

io.on("connect", (socket) => {
	console.log("we have a new connection!");

	socket.on("disconnect", () => {
		console.log("user had left")
	});
});


//server
app.use(router);
server.listen(1337, () => {
	console.log("server is running on port 1337");
});