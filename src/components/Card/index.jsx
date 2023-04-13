import React from 'react';
import './styles.css'

const Card = ({children, classes}) => {
	return (
		<div className={`card ${classes}`}>
			{children}
		</div>
	);
};

export default Card;