import React, { useEffect, useState } from "react";
import styles from "./Options.module.scss";

function Options() {
	const [option, setOptions] = useState([]);

	useEffect(() => {
		async function fetchOptions() {
			const response = await fetch(
				"http://127.0.0.1:8000/api/categories/1"
			);
			const json = await response.json();
			setOptions(json);
		}
		console.log(option);
		fetchOptions();
	}, []);

	return (
		<>
			{option.length > 0 ? (
				<div className={styles.options}>
					<div>
						<select key={option.id}>
							<option>{option.category}</option>
						</select>

						{console.log(option)}
					</div>
					{/* <button>
						<span></span>
						<span></span>
						<span></span>
						<span></span> Choose a category
					</button> */}
				</div>
			) : (
				<h1>Loading...</h1>
			)}
		</>
	);
}

export default Options;
