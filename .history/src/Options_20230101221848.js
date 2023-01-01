import React, { useEffect, useState } from "react";
import styles from "./Options.module.scss";

const Options = () => {
	const [option, setOptions] = useState([]);
	const id = 1;
	useEffect(() => {
		async function fetchOptions() {
			const response = await fetch(
				`http://127.0.0.1:8000/api/categories`
			);
			const json = await response.json();
			setOptions(json.parse);
			const opcoes = Object.values(option);
			console.log(opcoes);
		}
		fetchOptions();
	}, []);
	return (
		<>
			<div className={styles.options}>
				<div>
					{option && option.length > 0 ? (
						option.map((e) => (
							<select key={e.id}>
								<option value={e.category}>asdasd</option>
							</select>
						))
					) : (
						<h1>asdasd</h1>
					)}
				</div>
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
