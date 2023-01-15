import React from "react";
import { Loading } from "./Loading";
import styles from "./Phrase.module.scss";
import "./Phrase.module.scss";

function Phrase(props) {
	const { data } = props;
	return (
		<section className={styles.um}>
			<li></li>
				<div class="outerBorder">
					<div class="innerBorder">
						{data && (
							<img src={data.image_url} alt="image_phrase" />
						)}
						{data ? <h1>{data.phrase}</h1> : <Loading />}
					</div>
				</div>
			</div>
		</section>
	);
}

export { Phrase };
