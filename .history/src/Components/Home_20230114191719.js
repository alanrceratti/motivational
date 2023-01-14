import React from "react";
import PhraseGet from "./PhraseGet";
import Title from "./Title";
import TitleDown from "./TitleDown";
import "./Home.scss";

const Home = () => {
	return (
		<div>
			<Title />
			<PhraseGet />
			<TitleDown />
		</div>
	);
};

export default Home;
