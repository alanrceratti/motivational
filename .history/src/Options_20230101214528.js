import React, { useEffect, useState } from "react";
import styles from "./Options.module.scss";

const Options = () => {
	const [option, setOptions] = useState([]);

	useEffect(() => {
		async function fetchOptions() {
			const response = await fetch(
				"http://127.0.0.1:8000/api/categories/1"
			);
			const json = await response.json();
			setOptions(json);
			console.log(option);
		}
		fetchOptions();
	}, []);
	return (
		<>
			<div className={styles.options}>
				<label htmlFor="cars">Choose a car:</label>
				<select>
					{cate.map((e) => (
						<div key={e.id}>
							{option ? (
								<option>{e.category}</option>
							) : (
								"Not array"
							)}
							;
						</div>
					))}
				</select>
				<button>
					<span></span>
					<span></span>
					<span></span>
					<span></span> Choose a category
				</button>
			</div>
		</>
	);
};

export default Options;
