import React from "react";
import styles from "./TitleDown.module.scss";

const TitleDown = () => {
	return (
		<section>
			<div className={styles.container}>
				<h1>Loved our quote? Why not buy something with it in it?</h1>
				<button className={styles.button2}>
					<span class="box">Hover!</span>
				</button>
			</div>
		</section>
	);
};

export default TitleDown;
