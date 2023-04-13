import React from 'react';
import './styles.css';
const Question = ({answer, hints}) => {
	return (
		<>
			<p className='answer'>{answer}</p>
			{hints.map((hint)=>{
				return <p className='hint' key={hint}>{hint}</p>
			})}
		</>
	);
};

export default Question;