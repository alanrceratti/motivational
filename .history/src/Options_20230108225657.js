import React, { useEffect, useState, useContext } from "react";
import styles from "./Options.module.scss";

// import { handleClickCategory } from "./endpoints/PhraseGet";

function Options() {
	const [options, setOptions] = useState([]);
	const [loading, setLoading] = React.useState(true);
	const [selectedOption, setSelectedOption] = useState(null);
	const { dispatch } = useContext(MyContext);

	async function fetchOptions() {
		const response = await fetch(
			`https://motivational-api-2kzjz.ondigitalocean.app/api/categories/all`
			// `https://motivational-api-2kzjz.ondigitalocean.app/api/categories/all`
		);
		const json = await response.json();
		const arr = Object.values(json);
		setOptions(arr);
		setLoading(false);
	}

	useEffect(() => {
		fetchOptions();
	}, []);

	const handleChange = (e) => {
		dispatch({ type: "setOption", payload: e.target.value });
	};

	return (
		<>
			{loading ? (
				<p>Loading......</p>
			) : (
				<div className={styles.options}>
					<select>
						{options.map((option) => (
							<option key={option.id} onChange={handleChange}>
								{option.category_name}
							</option>
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
