import React from "react";
import PhraseGet from "./PhraseGet";
import styles from "./Home.module.scss";
import TitleDown from "./TitleDown";

const Home = ({ FullURL }) => {
	return (
		<div className={styles.home}>
			<PhraseGet  />
			<TitleDown FullURL={FullURL} />
		</div>
	);
};

export default Home;
