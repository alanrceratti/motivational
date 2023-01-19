import React from "react";
import { Loading } from "./Loading";
import styles from "./Phrase.module.scss";

function Phrase(props) {
	const { data, next } = props;
	return (
		<section className={styles.um}>
			<div>
				{data && <img src={data.image_url} alt="image_phrase" />}
				{data ? <h1>{data.phrase}</h1> : <Loading />}
				<button className={styles.next} onClick={handleNext}>
					Next
				</button>
			</div>
		</section>
	);
}

export { Phrase };
