import React from "react";
import PhraseGet from "./PhraseGet";
import styles from "./Home.module.scss";
import TitleDown from "./TitleDown";

const Home = (props) => {
	const {handleFullURL} = props

	return (
		<div className={styles.home}>
			<PhraseGet setFullURL={setFullURL} />
			<TitleDown FullURL={FullURL} />
		</div>
	);
};

export default Home;
