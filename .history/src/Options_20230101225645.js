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
		}
		fetchOptions();
		console.log(option);
	}, []);

	return (
		<>
			{option.length > 0 ? (
				<div className={styles.options}>
					<div>
						{option.map((e) => (
							<select key={e.id}>
								<option>{e.category}</option>
							</select>
						))}
					</div>
					<button>
						<span></span>
						<span></span>
						<span></span>
						<span></span> Choose a category
					</button>
				</div>
			) : (
				<h1>Loading...</h1>
			)}
		</>
	);
};

export default Options;
