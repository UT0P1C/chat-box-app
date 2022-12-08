//imports
const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const router = require("./router");
const {addUser, removeUser, getUser, getUsersInRoom} = require("./users");

//configs
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
	cors: {
		origin: '*',
	}
});

//socket io connection

io.on("connect", (socket) => {
	socket.on("join", ({name, room}, callback) => {
		console.log(name);
		console.log(room);
	});

	socket.on("disconnect", () => {
		console.log("user had left")
	});

});


//server
app.use(router);
server.listen(1337, () => {
	console.log("server is running on port 1337");
});