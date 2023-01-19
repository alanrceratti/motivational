import React from "react";
import PhraseGet from "./PhraseGet";
import Title from "./Title";
import TitleDown from "./TitleDown";
import styles from "./Home.module.scss";
import { CategorySelect } from "./CategorySelect";

const Home = () => {
	return (
		<div className={styles.home}>
			<Title />
			<CategorySelect/>
			<PhraseGet />
			<TitleDown />
		</div>
	);
};

export default Home;
