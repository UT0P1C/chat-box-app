import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Join.css"; 
import {BiLogIn} from "react-icons/bi"

const Join = () => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

	return (
		<div className='join-container'>
			<div className="header">
				<h1>Entrar</h1>
				<p>Entre no nosso chat em tempo real e faça novos amigos!</p>
			</div>
			<div className='join-inner-container'>
				<div>
					<p>Nome:</p>
					<input type="text" placeholder='h4ck3r' className='join-input' onChange={(e) => {
						setName(e.target.value);
					}}/>
				</div>
				<div>
					<p>Sala:</p>
					<input type="text" placeholder='javascript' className='join-input' onChange={(e) => {
						setRoom(e.target.value);
					}}/>
				</div>

				<Link to={`/chat?name=${name}&room=${room}`} onClick={e => !name || !room ? e.preventDefault() : null}>
					<button className='btn' type='submit'>
						<span>Entrar</span>
						<BiLogIn/>
					</button>
				</Link>
			</div>
		</div>
	)
}

export default Join