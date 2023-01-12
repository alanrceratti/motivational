import React, { useEffect, useState } from "react";
import styles from "../endpoints/PhraseGet.module.scss";

function PhraseGet() {
	const [categoryId, setCategoryId] = useState(1);
	const [data, setData] = useState(null);
	const [options, setOptions] = useState([]);
	const [loading, setLoading] = useState(true);
	const [loadingImg, setLoadingImg] = useState(true);
	const [number, setNumber] = useState(1);
	// const [count, setCount] = useState(0);

	let id1 = [1, 2, 5];
	let id2 = [3, 4, 6];

	function handleChangeCategory(e) {
		setCategoryId(e.target.value);

		if (e.target.value === "1") {
			let randomNumber;
			// retrieve previousid1 array from local storage
			let previousid1 =
				JSON.parse(localStorage.getItem("previousid1")) || [];
			// filter the id1 array to exclude the previousid1 numbers
			let filteredId1 = id1.filter(
				(number) => !previousid1.includes(number)
			);
			// if there are still numbers available in filteredId1 array
			if (filteredId1.length > 0) {
				const randomIndex = Math.floor(
					Math.random() * filteredId1.length
				);
				randomNumber = filteredId1[randomIndex];
				setNumber(randomNumber.toString());
				// add new randomNumber to the previousid1 array
				previousid1.push(randomNumber);
				// store the updated previousid1 array in local storage
				localStorage.setItem(
					"previousid1",
					JSON.stringify(previousid1)
				);
			} else {
				localStorage.removeItem("previousid1");
				console.log("acabou o 1");
			}
		} else if (e.target.value === "2") {
			let randomNumber;
			// retrieve previousid2 array from local storage
			let previousid2 =
				JSON.parse(localStorage.getItem("previousid2")) || [];
			// filter the id2 array to exclude the previousid2 numbers
			let filteredId2 = id2.filter(
				(number) => !previousid2.includes(number)
			);
			// if there are still numbers available in filteredId2 array
			if (filteredId2.length > 0) {
				const randomIndex = Math.floor(
					Math.random() * filteredId2.length
				);
				randomNumber = filteredId2[randomIndex];
				setNumber(randomNumber.toString());
				// add new randomNumber to the previousid2 array
				previousid2.push(randomNumber);
				// store the updated previousid2 array in local storage
				localStorage.setItem(
					"previousid2",
					JSON.stringify(previousid2)
				);
			} else {
				localStorage.removeItem("previousid2");
				console.log("acabou o 22");
			}
		} else {
			console.log("cabouuuuuuse");
		}
	}
	// function randomNumber(max) {
	// 	return setNumber(Math.floor(Math.random() * (max - 1)) + 1);
	// }

	// async function fetchCount() {
	// 	try {
	// 		const response = await fetch("http://127.0.0.1:200/api/phrases/");
	// 		const json = await response.json();
	// 		if (!json) throw new Error("No JSON received");
	// 		if (json.hasOwnProperty("results") && json.results.length) {
	// 			const results = json.results;
	// 			results.forEach((item) => {
	// 				if (item.category_name === 1) {
	// 					id1.push(item.id);
	// 				} else if (item.category_name === 2) {
	// 					id2.push(item.id);
	// 				} else if (item.category_name === 3) {
	// 					id3.push(item.id);
	// 				}
	// 			});
	// 			console.log(id1, id2, id3);
	// 		}
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
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
		fetchData();
	}

	useEffect(() => {
		fetchOptions();
		// fetchCount();
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
