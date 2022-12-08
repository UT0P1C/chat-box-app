import React, {useState, useEffect} from 'react'
import { useLocation } from "react-router-dom";
import {io} from "socket.io-client";

let socket;

const Chat = () => {
	
	const search = useLocation().search;
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

	const ENDPOINT = "localhost:1337"

	useEffect(() => {
		
		const name = new URLSearchParams(search).get('name');
		const room = new URLSearchParams(search).get('room');

		socket = io(ENDPOINT)

		setName(name);
		setRoom(room);

		socket.emit("join", {name, room}, ()=> {

		});

		return () => {
			socket.emit("disconnect");

			socket.off();
		}
	}, [ENDPOINT, search]);






	return (
		<div>Chat</div>
	)
}

export default Chat