import React, { useContext } from "react";
import Options from "../Options";
import { CategorySelect } from "./CategorySelect";
import PhraseGet from "./PhraseGet";
import Title from "./Title";
import TitleDown from "./TitleDown";

import PhraseContext from "./PhraseGet";

const Home = () => {
	const { handleClick } = useContext(PhraseContext);
	return (
		<div>
			<Title />
			<Options />
			<PhraseGet />
			<TitleDown />
		</div>
	);
};

export default Home;
