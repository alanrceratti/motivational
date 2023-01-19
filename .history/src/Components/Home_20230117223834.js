import React from "react";
import PhraseGet from "./PhraseGet";
import Title from "./Title";
import TitleDown from "./TitleDown";
import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div className={styles.home}>
			<Title />
			<Cat
			<PhraseGet />
			<TitleDown />
		</div>
	);
};

export default Home;
