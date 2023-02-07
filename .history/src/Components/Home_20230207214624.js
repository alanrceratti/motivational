import React from "react";
import PhraseGet from "./PhraseGet";
import styles from "./Home.module.scss";


const Home = () => {
	return (
		<div className={styles.home}>
			<PhraseGet />
		</div>
	);
};

export default Home;
