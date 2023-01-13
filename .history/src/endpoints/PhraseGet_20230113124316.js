import React, { useEffect, useState } from "react";
import styles from "../endpoints/PhraseGet.module.scss";
import Options from "../Options";

function PhraseGet() {
	// state variable to store the selected category id
	const [categoryId, setCategoryId] = useState(1);
	// state variable to store the data retrieved from the API
	const [data, setData] = useState(null);
	// state variable to store the options for the select element
	const [options, setOptions] = useState([]);
	// state variable to indicate if the data is currently being loaded
	const [loading, setLoading] = useState(true);
	// state variable to indicate if the image is currently being loaded
	const [loadingImg, setLoadingImg] = useState(true);
	// state variable to store the current random number
	const [number, setNumber] = useState(1);
	// commented out state variable for future use, possibly for storing count of words
	// const [count, setCount] = useState(0);
	const [showSelect, setShowSelect] = useState(true);

	// arrays containing the id's for category 1 and 2
	let id1 = [1, 2, 5];
	let id2 = [3, 4, 6];

	const handleClick = () => {
		setShowSelect(!showSelect);
	};
	// function to handle changes in the category select element
	function handleChangeCategory(e) {
		// set the selected category id
		setCategoryId(e.target.value);

		// if category 1 is selected
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
				// set the new random number
				setNumber(randomNumber);
				// add new randomNumber to the previousid1 array
				previousid1.push(randomNumber);
				// store the updated previousid1 array in local storage
				localStorage.setItem(
					"previousid1",
					JSON.stringify(previousid1)
				);
			} else {
				// if there are no more numbers available, remove the previousid1 array from local storage and log a message
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
				// set the new random number
				setNumber(randomNumber);
				// add new randomNumber to the previousid2 array
				previousid2.push(randomNumber);
				// store the updated previousid2 array in local storage
				localStorage.setItem(
					"previousid2",
					JSON.stringify(previousid2)
				);
			} else {
				// if there are no more numbers available, remove the previousid2 array from local storage and log a message
				localStorage.removeItem("previousid2");
				console.log("acabou o 22");
			}
		} else {
			// if the selected category id is not 1 or 2, log a message
			console.log("cabouuuuuuse");
		}
		fetchData();
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
		fetchData();
	}

	useEffect(() => {
		fetchOptions();
		// fetchCount();
	}, [categoryId]);

	async function fetchData() {
		let retries = 0;
		const MAX_RETRIES = 3;
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
		<section className={styles.mainContainerr}>
			{loading ? (
				<p>Loading......</p>
			) : (
				<div className={styles.options}>
					<Options onClick={handleClick} />
					<select
						style={{ display: showSelect ? "block" : "none" }}
						onChange={handleChangeCategory}
					>
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
				<div className={styles.um}>
					<div>
						{data && (
							<img src={data.image_url} alt="image_phrase" />
						)}
						{data ? <h1>{data.phrase}</h1> : "Loading..."}
					</div>
				</div>
			)}
		</section>
	);
}

export default PhraseGet;
