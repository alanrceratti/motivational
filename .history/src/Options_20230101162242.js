import React from "react";
import styles from "./Options.module.scss";

const Options = () => {
	return (
		<div className={styles.options}>
			<button>
				<span></span>
				<span></span>
				<span></span>
				<span></span> Choose a category
			</button>
			<label for="cars"></label>
			<select name="cars" id="cars" form="carform">
				<option value="volvo">Volvo</option>
				<option value="saab">Saab</option>
				<option value="opel">Opel</option>
				<option value="audi">Audi</option>
			</select>
		</div>
	);
};

export default Options;
