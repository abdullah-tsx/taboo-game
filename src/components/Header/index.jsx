import React, {useState} from 'react';
import classNames from "classnames";
import {en} from '../../data/categories.json';
import './styles.css';
import {randomQuestion} from "../../helpers/randomQuestion.js";
import {questions} from "../../helpers/questions.js";

const Header = ({setCategory, category, setQuestion}) => {
	const onClickHandler = (event) => {
		event.preventDefault();
		setCategory(event.target.id)
		setQuestion(randomQuestion(questions[event.target.id]));
	}

	return (
		<div className="header">
			<div className="categories">
				<ul>
					{Object.keys(en).map((key) => {
						return (
							<li
								className={classNames({"active": category === key})}
								key={key}
								id={key}
								onClick={onClickHandler}
							>
								{en[key].text}
							</li>)
					})}
				</ul>
			</div>
		</div>
	);
};

export default Header;