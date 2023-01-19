import React from "react";
import { CategorySelect } from "./CategorySelect";
import PhraseGet from "./PhraseGet";
import Title from "./Title";
import TitleDown from "./TitleDown";

const Home = () => {
	return (
		<div>
			<Title />
			<CategorySelect />
			<PhraseGet />
			<TitleDown />
		</div>
	);
};

export default Home;
