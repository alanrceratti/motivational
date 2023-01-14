import React from "react";
import { Loading } from "./Loading";
import styles from "./Phrase.module.scss";

function Phrase(props) {
	const { data } = props;
	return (
		<section className={styles.um}>
			<div>
				{data ? (
{data && (
    <img src={data.image_url} alt="image_phrase" />
)}
{data ? <h1>{data.phrase}</h1> : "Loading..."}
				) : (
					<Loading />
				)}
			</div>
		</section>
	);
}

export { Phrase };
