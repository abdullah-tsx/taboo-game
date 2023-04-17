import {useMemo, useState} from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Timer from "./components/Timer";
import Question from "./components/Question/index.jsx";

import {questions} from "./helpers/questions.js";


const randomQuestion = function (obj) {
	const keys = Object.keys(obj);
	const randomKey = keys[keys.length * Math.random() << 0];
	return {'answer': randomKey, hints: obj[randomKey]}
};

function App() {

	const [category, setCategory] = useState(null);
	const [score, setScore] = useState(0);
	const [{answer, hints}, setQuestion] = useState({});

	const handleCorrect = () => {
		setScore((score) => {
			return score + 1
		});
		setQuestion(randomQuestion(questions[category]));
	}
	const handleSkip = () => {
		setQuestion(randomQuestion(questions[category]));
	}
	const resetGame = () => {
		setCategory(null);

		setScore(0);
	}

	const timer = useMemo(() => {
		return <Timer cateogry={category} setCategory={setCategory} resetGame={resetGame} canStart={!category}/>
	}, [category])


	return (
		<div className="App">
			<Header setCategory={setCategory} category={category} setQuestion={setQuestion}/>
			<Card classes='container'>
				<div className="game-stats">
					<h3>Correct: {score}</h3>
					<h3>Selected Category: {category}</h3>
					{timer}
				</div>
				{Boolean(category) ? <div className="game">
					<button className='skip' onClick={handleSkip}>Skip</button>
					<Card classes='small'>
						<Question answer={answer} hints={hints}/>
					</Card>
					<button className='correct' onClick={handleCorrect}>Correct</button>
				</div> : <h1>Select a category</h1>}
			</Card>
		</div>
	)
}

export default App
