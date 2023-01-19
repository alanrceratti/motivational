import React from "react";
import Options from "../Options";

import { CategorySelect } from "./CategorySelect";
import { Loading } from "./Loading";
import styles from "./Phrase.module.scss";

function Phrase(props) {
	const { data } = props;
	return (
		<section className={styles.um}>
			<div>
				<Options />
				{data && <img src={data.image_url} alt="image_phrase" />}
				{data ? <h1>{data.phrase}</h1> : <Loading />}
			</div>
		</section>
	);
}

export { Phrase };
