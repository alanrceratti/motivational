import React, { useEffect, useState } from "react";
import styles from "./Options.module.scss";

const Options = () => {
	const [option, setOptions] = useState([]);

    function data(){
	const fetchData = () => {
		const response = fetch(`http://127.0.0.1:8000/api/categories`);
		const json = response.json();
		setOptions(json);

		console.log(option);
	};

	if (option === undefined) {
		return null;
	}

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
						<select>
							<option>Select</option>
						</select>
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
