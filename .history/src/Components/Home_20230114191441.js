import React from "react";
import PhraseGet from "./PhraseGet";
import Title from "./Title";
import TitleDown from "./TitleDown";
import './'

const Home = () => {
	return (
		<div className="main">
			<Title />
			<PhraseGet />
			<TitleDown />
		</div>
	);
};

export default Home;
