import React from 'react';

const Game = ({name, score}) => {
	return (
		<div>
			<p>It's working!</p>
			<p>{`${name}, your current score is ${score}`}</p>
		</div>
	)
}

export default Game