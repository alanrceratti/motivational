import React from "react";
import { Loading } from "./Loading";
import styles from "./Phrase.module.scss";

function Phrase(props) {
	const { data } = props;
	return (
		<section className={styles.um}>
			<div>
				{data ? (
					<div>
						<img src={data.image_url} alt={data.phrase} />
						<p>{data.phrase}</p>
					</div>
				) : (
					<Loading />
				)}
			</div>
		</section>
	);
}

export { Phrase };
