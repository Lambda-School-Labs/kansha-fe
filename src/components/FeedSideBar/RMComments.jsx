import React from 'react';

function RMComments({ pic, message }) {
	return (
		<div className="comm-container">
			<img className="comm-pic" src={pic}></img>
			<p className="comm-message">{message}</p>
		</div>
	);
}

export default RMComments;
