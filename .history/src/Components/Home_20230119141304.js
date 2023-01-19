import React from "react";
import Options from "../Options";
import { CategorySelect } from "./CategorySelect";
import PhraseGet from "./PhraseGet";
import Title from "./Title";
import TitleDown from "./TitleDown";

const Home = () => {
	return (
		<div>
			<Title />
			<Options onClic />
			<PhraseGet />
			<TitleDown />
		</div>
	);
};

export default Home;
