import React from "react";
import { Loading } from "./Loading";
import styles from "./Phrase.module.scss";

function Phrase(props) {
	const { data, handleNext } = props;
	return (
		<section className={styles.um}>
			<motion.div>
				{data && <img src={data.image_url} alt="image_phrase" />}
				{data ? <h1>{data.phrase}</h1> : <Loading />}
			</motion.div>
			<button className={styles.next} onClick={handleNext}>
				Next
			</button>
		</section>
	);
}

export { Phrase };
