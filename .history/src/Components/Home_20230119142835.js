import React, { useContext } from "react";
import Options from "../Options";
import { CategorySelect } from "./CategorySelect";
import { PhraseGet } from "./PhraseGet";
import Title from "./Title";
import TitleDown from "./TitleDown";
import { handleClick } from "./PhraseGet";
import PhraseContext from './'

const Home = () => {
	const { handleClick } = useContext(PhraseContext);
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
