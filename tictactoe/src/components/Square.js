import React from 'react';
const style = {
	background: 'yellow',
	border: '2px solid orangered',
	boxSizing: 'border -box',
	fontSize: '30px',
	fontWeight: '800',
	cursor: 'pointer',
	outline: 'none'
};

const Square = ({ value, onClick }) => {
	return (
		<button style={style} onClick={onClick}>
			{value}
		</button>
	);
};

export default Square;
