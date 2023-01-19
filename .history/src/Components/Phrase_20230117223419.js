import React from "react";
import Options from "../Options";
import { Loading } from "./Loading";
import styles from "./Phrase.module.scss";
import PhraseGet from "./PhraseGet";

function Phrase(props) {
	const { data } = props;
	return (
		<section className={styles.um}>
			<PhraseGet
			<div>
				{data && <img src={data.image_url} alt="image_phrase" />}
				{data ? <h1>{data.phrase}</h1> : <Loading />}
			</div>
		</section>
	);
}

export { Phrase };
