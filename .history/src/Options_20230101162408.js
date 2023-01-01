import React, { useEffect, useState } from "react";
import styles from "./Options.module.scss";

const Options = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				"http://127.0.0.1:8000/api/phrases/1/"
			);
			const json = await response.json();
			setData(json);
			console.log();
		}
		fetchData();
	}, []);
	return (
		<div className={styles.options}>
			<button>
				<span></span>
				<span></span>
				<span></span>
				<span></span> Choose a category
			</button>
			<label for="cars">Choose a car:</label>
			<select name="cars" id="cars" form="carform">
				<option value="volvo">{data.}</option>
			</select>
		</div>
	);
};

export default Options;
