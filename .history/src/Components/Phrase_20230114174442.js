import React from "react";
import styles from "./Phrase.module.scss";

function Phrase(props) {
	const { data } = props;
	return (
		<section className={styles.um}>
			<div>
				{data ? (
					<div>
						<img src={data.img} alt={data.phrase} />
						<p>{data.phrase}</p>
					</div>
				) : (
					<p>No data</p>
				)}
			</div>
		</section>
	);
}

export { Phrase };
