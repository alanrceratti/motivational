import React, { useEffect, useState } from "react";
import styles from "./Options.module.scss";

const Options = () => {
	const [option, setOptions] = useState([]);

	useEffect(() => {
		async function fetchOptions() {
			const response = await fetch(
				"http://127.0.0.1:8000/api/categories/"
			);
			const json = await response.json();
			setOptions(json);
			console.log(option);
		}
		fetchOptions();
	}, []);
	return (
		<div className={styles.options}>
			<button>
				<span></span>
				<span></span>
				<span></span>
				<span></span> Choose a category
			</button>
			<label htmlFor="cars">Choose a car:</label>
			<select>
				{Array.isArray(option)
					? option.map((options) => (
							<option key={option.id} value={option.value}>
								{option.category}
							</option>
					  ))
					: "Not array"}
			</select>
		</div>
	);
};

export default Options;
