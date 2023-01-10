import React, { useEffect, useState } from "react";
import styles from "../endpoints/PhraseGet.module.scss";

function PhraseGet() {
	const [categoryId, setCategoryId] = React.useState(null);
	const [data, setData] = useState(null);
	const [options, setOptions] = useState([]);
	const [loading, setLoading] = React.useState(true);

	function handleClickCategory(e) {
		setCategoryId(e.target.value);
		fetchData();
	}

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	const number = randomNumber(1, 2);

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

	async function fetchData() {
		try {
			const response = await fetch(
				`http://127.0.0.1:200/api/categories/${categoryId}/phrases/?filter_by_id=${number}`
				// `https://motivational-api-2kzjz.ondigitalocean.app/api/categories/1/phrases/?filter_by_id=${number}`
			);
			const json = await response.json();
			setData(json);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			{loading ? (
				<p>Loading......</p>
			) : (
				<div className={styles.options}>
					<select>
						{options.map((option) => (
							<option
								key={option.id}
								onClick={handleClickCategory}
							>
								{option.category_name}
							</option>
						))}
					</select>
				</div>
			)}
			<section className={styles.container}>
				<div className={styles.um}>
					{data && <img src={data.image_url} alt="image_phrase" />}
					<div>{data ? <h1>{data.phrase}</h1> : "Loading..."}</div>
				</div>
			</section>
		</>
	);
}

export default PhraseGet;
