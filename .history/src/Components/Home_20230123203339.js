import React from "react";
import PhraseGet from "./PhraseGet";
import styles from "./Home.module.scss";
import TitleDown from "./TitleDown";
import { Loading } from "./Loading";

const Home = (props) => {
	const { loading } = props;
	return (
		{loading ?
		<div className={styles.home}>
			<PhraseGet />
			<TitleDown />
		</div> ? <Loading/>
	);
};

export default Home;
