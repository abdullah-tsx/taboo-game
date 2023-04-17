import React, {useState, useMemo} from 'react';
import Countdown from 'react-countdown';
import './styles.css';

const Timer = ({canStart, setCategory, resetGame}) => {

	const [start, setStart] = useState(false);

	const renderer = ({minutes, seconds, completed}) => {
		if (completed) {
			// Render a completed state
			return <span>Time is up!</span>;
		} else {
			// Render a countdown
			return <span>Time Left: {seconds} sec</span>;
		}
	}
	return (
		<div>
			{start ? <Countdown date={Date.now() + 10000} renderer={renderer} onComplete={() => {
					setStart(false)
					setCategory(null);
					resetGame();
				}}/> :
				<button className='button start' disabled={Boolean(canStart)} onClick={() => setStart(true)}>Start</button>}

		</div>
	);
};

export default Timer;