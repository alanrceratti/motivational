import React, { useEffect, useState } from "react";
import styles from "./Options.module.scss";

const Options = () => {
	const [option, setOptions] = useState(null);

	useEffect(() => {
		async function fetchOptions() {
			const response = await fetch(
				"http://127.0.0.1:8000/api/categories"
			);
			const json = await response.json();
			setOptions(json);
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
				{data.map((item) => (
					<option key={item.id} value="volvo">
						{data.category}
					</option>
				))}
			</select>
		</div>
	);
};

export default Options;
