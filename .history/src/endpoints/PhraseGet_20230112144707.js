import React, { useEffect, useState } from "react";
import styles from "../endpoints/PhraseGet.module.scss";

function PhraseGet() {
	const [categoryId, setCategoryId] = useState(1);
	const [data, setData] = useState(null);
	const [options, setOptions] = useState([]);
	const [loading, setLoading] = useState(true);
	const [loadingImg, setLoadingImg] = useState(true);
	const [number, setNumber] = useState(1);
	const [count, setCount] = useState(0);

	function handleChangeCategory(e) {
		setCategoryId(e.target.value);
		fetchCount();
		let id1 = [];
		let id2 = [];
		let id3 = [];


		async function fetchCount() {
			try {
				const response = await fetch(
					`http://127.0.0.1:200/api/categories/${e.target.value}/`
				);

				const json = await response.json();
				if (!json) throw new Error("No JSON received");
				const results = json.phrases;
				console.log(results);
				results.forEach((item) => {
					if (item.category_name === 1) {
						id1.push(item.id);
					} else if (item.category_name === 2) {
						id2.push(item.id);
					} else if (item.category_name === 3) {
						id3.push(item.id);
					}
				});
			} catch (err) {
				console.error(err);
			}
		}

		if (e.target.value === "1") {
			const randomIndex = Math.floor(Math.random() * id1.length);
			setNumber(randomIndex.toString());
	
		} else if (e.target.value === "2") {
			const randomIndex = Math.floor(Math.random() * id2.length);
			setNumber(randomIndex.toString());
	
		} else {
			console.log("nao deu");
		}
		console.log(id1, id2, id3);
	}

	// function randomNumber(max) {
	// 	return setNumber(Math.floor(Math.random() * (max - 1)) + 1);
	// }

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
		fetchData();
	}, [categoryId]);

	async function fetchData() {
		let retries = 0;
		const MAX_RETRIES = 2;
		let response;

		while (
			retries < MAX_RETRIES &&
			(response === undefined || response.status === 404)
		) {
			// console.log("before", categoryId);
			try {
				response = await fetch(
					`http://127.0.0.1:200/api/categories/${categoryId}/phrases/?filter_by_id=${number}`
					// `https://motivational-api-2kzjz.ondigitalocean.app/api/categories/1/phrases/?filter_by_id=${number}`
				);

				if (response.status === 404) {
					retries++;
				} else {
					const json = await response.json();
					setData(json);
					setLoadingImg(false);
				}
				console.log(
					`GET ${response.url} ${response.status} (${response.statusText})`
				);
			} catch (error) {
				console.error("asdasdad");
			}
			await new Promise((resolve) => setTimeout(resolve, 1000));
		}
	}

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
			{loadingImg ? (
				<h1>Loading</h1>
			) : (
				<section className={styles.container}>
					<div className={styles.um}>
						{data && (
							<img src={data.image_url} alt="image_phrase" />
						)}
						<div>
							{data ? <h1>{data.phrase}</h1> : "Loading..."}
						</div>
					</div>
				</section>
			)}
		</>
	);
}

export default PhraseGet;
