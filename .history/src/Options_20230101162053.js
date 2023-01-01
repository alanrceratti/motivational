import React from "react";
import styles from "./Options.module.scss";

const Options = () => {
	return (
		<div className={styles.options}>
			<button>
				<span></span>
				<span></span>
				<span></span>
				<span></span> Hover me
			</button>
		</div>
	);
};

export default Options;
