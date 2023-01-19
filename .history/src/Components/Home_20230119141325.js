import React from "react";
import Options from "../Options";
import { CategorySelect } from "./CategorySelect";
import PhraseGet from "./PhraseGet";
import Title from "./Title";
import TitleDown from "./TitleDown";
import {handleClick}

const Home = () => {
	return (
		<div>
			<Title />
			<Options onClick={handleClick} />
			<PhraseGet />
			<TitleDown />
		</div>
	);
};

export default Home;
