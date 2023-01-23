import React from "react";
import PhraseGet from "./PhraseGet";
import styles from "./Home.module.scss";
import TitleDown from "./TitleDown";

const Home = (props) => {
	const { loading } = props;
	return (
		
		<div className={styles.home}>
			<PhraseGet />
			<TitleDown />
		</div>
	);
};

export default Home;
