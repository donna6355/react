import React, { useState } from 'react';
import { calculateWinner } from '../helpers.js';
import Board from './Board';

const styles= {
	width:'200px',
	margin:'20px auto',
	fontFamily: 'roboto',
	textAlign:'center',
	fontWeight:'bold'
}

const btnStyle = {
	outline:'none',
	border:'none',
	background:'none',
	backgroundColor:'pink',	
	fontFamily: 'roboto',
	fontWeight:'bold'
}

const Game = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXisNext] = useState(true);
	const winner = calculateWinner(board);

	const handleClick = i => {
		const boardCopy = [...board];
		// if user click an occupied square or if game is won, return
		if (winner || boardCopy[i]) return;
		// Put an X or an O in the clicked square
		boardCopy[i] = xIsNext ? 'X' : 'O';
		setBoard(boardCopy);
		setXisNext(!xIsNext);
	};

	const renderMoves = () => {
		return<button style={btnStyle} onClick={()=> setBoard(Array(9).fill(null))}>
			Start Game
		</button>
	};

	return (
	<>
	<Board squares={board} onClick={handleClick} />
	<div style={styles}>
		<p>{winner?'Winner : '+winner:'Next Player: '+(xIsNext?'X':'O' )}</p>
		{renderMoves()}
	</div>
	</>
	)
};

export default Game;
