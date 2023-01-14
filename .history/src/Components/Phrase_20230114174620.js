import React from "react";
import styles from "./Phrase.module.scss";

function Phrase(props) {
	const { data } = props;
	return (
		<section className={styles.um}>
			<div>
				{data ? (
					<div>
						<img src={data.img} alt="image_phrase" />
						<p>{data.phrase}</p>
					</div>
				) : (
					<Load>
				)}
			</div>
		</section>
	);
}

export { Phrase };
