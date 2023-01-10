import React, { useEffect, useState } from "react";
import styles from "../endpoints/PhraseGet.module.scss";

function PhraseGet() {
	const [categoryId, setCategoryId] = useState(1);
	const [data, setData] = useState(null);
	const [options, setOptions] = useState([]);
	const [loading, setLoading] = useState(true);
	const [number, setNumber] = useState(null);
	const [count, setCount] = useState(null);
	function handleChangeCategory(e) {
		setCategoryId(e.target.value);
	}

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}
	fetchCount();
	async function fetchCount() {
		try {
			const response = await fetch("http://127.0.0.1:200/api/phrases/");
			const json = await response.json();
			if (!json) throw new Error("No JSON received");
			const arr = Object.values(json);
			setCount(arr.length - 1);
		} catch (err) {
			console.error(err);
		}
	}
	useEffect(() => {
		fetchCount();
	}, []);

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
		let retries = 0;
		const MAX_RETRIES = 5;
		let response;
		randomNumber(count);
		while (
			retries < MAX_RETRIES &&
			(response === undefined || response.status === 404)
		) {
			fetchCount();
			setNumber(randomNumber(1, count));
			console.log(number);
			try {
				response = await fetch(
					`http://127.0.0.1:200/api/categories/${categoryId}/phrases/?filter_by_id=${number}`
					// `https://motivational-api-2kzjz.ondigitalocean.app/api/categories/1/phrases/?filter_by_id=${number}`
				);

				if (response.status === 404) {
					retries++;
					console.log(number);
				} else {
					const json = await response.json();
					setData(json);
				}
			} catch (error) {
				console.log("asdasdad");
			}
			await new Promise((resolve) => setTimeout(resolve, 1000));
		}
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
