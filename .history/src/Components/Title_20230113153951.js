import React from "react";
import styles from "./Title.module.scss";

const Title = () => {
	return (
		<div className={styles.container}>
			<div>
				<h1>
					Feeling unmotivated? Choose a category and inspire yourself!
				</h1>
			</div>
		</div>
	);
};

export default Title;
