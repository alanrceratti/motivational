import React, { useEffect, useState } from "react";
import styles from "../endpoints/PhraseGet.module.scss";

function PhraseGet() {
	const [categoryId, setCategoryId] = React.useState(1);
	const [data, setData] = useState(null);
	const [options, setOptions] = useState([]);
	const [loading, setLoading] = React.useState(true);
	const [number, setNumber] = React.useState(
		Math.floor(Math.random() * (5 - 1 + 1)) + 1
	);

	function handleChangeCategory(e) {
		setCategoryId(e.target.value);
		console.log(categoryId);
		console.log(e.target.value);
	}

	function randomNumber(min, max) {
		return setNumber(Math.floor(Math.random() * (max - min + 1)) + min);
	}

	async function fetchOptions() {
		const response = await fetch(
			`http://127.0.0.1:200/api/categories/all/`
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
		let response;
		while (response === undefined || response.status === 404)
			try {
				response = await fetch(
					`http://127.0.0.1:200/api/categories/${categoryId}/phrases/?filter_by_id=${number}`
					// `https://motivational-api-2kzjz.ondigitalocean.app/api/categories/1/phrases/?filter_by_id=${number}`
				);
				setTimeout(() => {
				if (response.status === 404) {
					setNumber(randomNumber(1, 5));
					}, 2000);
				} else {
					const json = await response.json();
					setData(json);
				}
			
			} catch (error) {
				console.error(error);
				break;
			}
		await new Promise((resolve) => setTimeout(resolve, 2000));
	}
	useEffect(() => {
		fetchData();
	}, [categoryId]);

	return (
		<>
			{loading ? (
				<p>Loading......</p>
			) : (
				<div className={styles.options}>
					<select onChange={handleChangeCategory}>
						{options.map((option) => (
							<option key={option.id} value={option.id}>
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
