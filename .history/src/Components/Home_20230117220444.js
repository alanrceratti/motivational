import React from "react";
import PhraseGet from "./PhraseGet";
import Title from "./Title";
import TitleDown from "./TitleDown";
import styles from '.'

const Home = () => {
	return (
		<div className={styles.home}>
			<Title />
			<PhraseGet />
			<TitleDown />
		</div>
	);
};

export default Home;
