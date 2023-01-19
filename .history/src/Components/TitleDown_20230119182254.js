import React from "react";
import styles from "./TitleDown.module.scss";

const TitleDown = () => {
	return (
		<section>
			<div className={styles.container}>
				<h1>
					Loved our quote? Why not buy something with your favorite?
				</h1>
				<button className={styles.button2}>SHOP NOW</button>
			</div>
		</section>
	);
};

export default TitleDown;
