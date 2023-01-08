import React, { useEffect, useState } from "react";
import styles from "./Options.module.scss";

function Options() {
	const [option, setOptions] = useState([]);
	const [loading, setLoading] = React.useState(true);

	async function fetchOptions() {
		const response = await fetch("http://127.0.0.1:8000/api/categories/1");
		const json = await response.json();
		setOptions(json);
		console.log(option);
	}

	useEffect(() => {
		fetchOptions();
	}, []);

	return (
		<>
			{loading ? (
                <p>Loading......</p>) : (
				<div className={styles.options}>					
							<select >
						{option.map((e) => (
								<option>{e.category}</option>
							</select>
						))}
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