import React, { useEffect, useState } from "react";
import styles from "./Options.module.scss";

function Options() {
	const [options, setOptions] = useState([]);
	const [loading, setLoading] = React.useState(true);

	async function fetchOptions() {
		const response = await fetch("http://127.0.0.1:8000/api/categories/2");
		const json = await response.json();
		const arr = Object.values(json);
		setOptions(arr);
		setLoading(false);
		console.log(optios);
	}

	useEffect(() => {
		fetchOptions();
	}, []);

	return (
		<>
			{loading ? (
				<p>Loading......</p>
			) : (
				<div className={styles.options}>
					<select>
						{options.map((option, index) => (
							<option key={index}>{option.category}</option>
						))}
					</select>
				</div>
			)}
		</>
	);
}

export default Options;

// {
// 	/* <button>
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 						<span></span> Choose a category
// 					</button> */
// }
