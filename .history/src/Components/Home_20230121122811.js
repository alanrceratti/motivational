import React from "react";
import PhraseGet from "./PhraseGet";

import TitleDown from "./TitleDown";

const Home = () => {
	return (
		<div className={styles.home}>
			<PhraseGet />
			<TitleDown />
			{/* <TitleDown /> */}
		</div>
	);
};

export default Home;
