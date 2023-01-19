import React, { useContext } from "react";
import Options from "../Options";
import { CategorySelect } from "./CategorySelect";
import PhraseGet from "./PhraseGet";
import Title from "./Title";
import TitleDown from "./TitleDown";

import PhraseContext from "./PhraseGet";

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
