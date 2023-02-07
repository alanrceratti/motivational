import React, { useEffect, useState } from "react";
import styles from "./PhraseGet.module.scss";
import { CategorySelect } from "./CategorySelect";
import { Loading } from "./Loading";
import { Phrase } from "./Phrase";
import { useLocation, useParams } from "react-router-dom";

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
	const [number, setNumber] = useState(nul);

	const [showSelect, setShowSelect] = useState(false);

	const { UrlCategoryId, UrlPhraseId } = useParams();

	useEffect(() => {
		fetch(`http://localhost:3000/category/${categoryId}/phrase/${number}`)
			.then((response) => response.json())
			.then((data) => {
				setCategoryId(data.categoryId);
				setNumber(data.phrase);
			});
	}, [categoryId, number]);
	console.log("hueheueuh", UrlCategoryId, UrlPhraseId);

	////////////////////////////////////////////////////////

	/////////////////////////////////////////////////////////////////////////
	// 	// Function to toggle visibility of select element
	const handleClick = () => {
		setShowSelect(!showSelect);
	};
	const handleNextButton = () => {
		handleChangeNext(categoryId);
	};

	function handleChangeNext(categoryId) {
		// set the selected category id
		setCategoryId(categoryId);
		const selectedCategoryId = categoryId;
		// Retrieve previous selected numbers for current category from local storage
		const previousIdList =
			JSON.parse(
				localStorage.getItem(`previousid${selectedCategoryId}`)
			) || [];
		// filter out previously selected numbers from the array
		const filteredIdList = idLists[selectedCategoryId].filter(
			(number) => !previousIdList.includes(number)
		);
		// if there are still numbers available in filteredIdList array
		if (filteredIdList.length > 0) {
			const randomIndex = Math.floor(
				Math.random() * filteredIdList.length
			);
			// select random number from filteredIdList array
			const randomNumber = filteredIdList[randomIndex];
			// set the new random number
			setNumber(randomNumber);
			// add new randomNumber to the previousIdList array
			previousIdList.push(randomNumber);
			// store the updated previousIdList array in local storage
			localStorage.setItem(
				`previousid${selectedCategoryId}`,
				JSON.stringify(previousIdList)
			);
			fetchData();
		} else {
			// if there are no more numbers available, remove the previousid array from local storage and log a message
		}
	}

	//////////////////////////////////////////////////////////////////////
	// 	// Object containing arrays of numbers associated with each category
	const idLists = {};
	// 	// function to map all the phrases and categories
	async function fetchCount() {
		const response = await fetch(
			`https://motivational-api-2kzjz.ondigitalocean.app/api/categories/all/`
			// `http://127.0.0.1:200/api/categories/all/`
		);
		const json = await response.json();
		console.log(idLists);
		json.map((category) => {
			const categoryId = category.id;
			const phraseIds = category.phrases.map((phrase) => phrase.id);
			idLists[categoryId] = phraseIds;
		});
	}

	useEffect(() => {
		fetchCount();
	}, [idLists]);

	////////////////////////////////////////////////////////////////////////////

	const IdFromLocalStorage = localStorage.getItem("currentID");
	const categoryIdFromLocalStorage = localStorage.getItem("currentCategory");
	useEffect(() => {
		if (categoryIdFromLocalStorage) {
			setCategoryId(
				parseInt(categoryIdFromLocalStorage),
				setNumber(parseInt(IdFromLocalStorage))
			);
		}
		fetchCount();
	}, []);

	// 	// function to handle changes in the category select element
	function handleChangeCategory(e) {
		const catclick = e.target.dataset.categoryId;
		// set the selected category id
		if (catclick !== categoryId) {
			setCategoryId(catclick);
			const selectedCategoryId = e.target.dataset.categoryId;
			// Retrieve previous selected numbers for current category from local storage
			const previousIdList =
				JSON.parse(
					localStorage.getItem(`previousid${selectedCategoryId}`)
				) || [];
			// filter out previously selected numbers from the array
			const filteredIdList = idLists[selectedCategoryId].filter(
				(number) => !previousIdList.includes(number)
			);
			// if there are still numbers available in filteredIdList array
			if (filteredIdList.length > 0) {
				const randomIndex = Math.floor(
					Math.random() * filteredIdList.length
				);
				// select random number from filteredIdList array
				const randomNumber = filteredIdList[randomIndex];
				// set the new random number
				setNumber(randomNumber);
				// add new randomNumber to the previousIdList array
				previousIdList.push(randomNumber);
				// store the updated previousIdList array in local storage
				localStorage.setItem(
					`previousid${selectedCategoryId}`,
					JSON.stringify(previousIdList)
				);
				setShowSelect(false);
			} else {
				// if there are no more numbers available, remove the previousid array from local storage and log a message
			}
		} else {
			setCategoryId(categoryId);
		}
	}

	async function fetchOptions() {
		// fetch data from api using fetch function
		const response = await fetch(
			// `http://127.0.0.1:200/api/categories/all/`
			`https://motivational-api-2kzjz.ondigitalocean.app/api/categories/all/`
		);
		// parse response to json
		const json = await response.json();
		// extract values of json object
		const arr = Object.values(json);
		// set options state
		setOptions(arr);
		// set loading state to false
		localStorage.setItem(`currentCategory`, categoryId);
		setLoading(false);
		// call fetchData function
		// if (!categoryIdFromLocalStorage) {
		// 	setCategoryId(2);
		// 	setNumber(10);
		// } else {
		// 	localStorage.setItem(`currentCategory`, categoryId);
		// }

		fetchData();
	}
	useEffect(() => {
		// call fetchOptions function when component mounts
		fetchOptions();
	}, [categoryId, number]);

	useEffect(() => {
		setCategoryId(UrlCategoryId);
		setNumber(UrlPhraseId);
	}, []);

	async function fetchData() {
		setLoadingImg(true);

		let retries = 0;
		// maximum number of retries if response status is 404
		const MAX_RETRIES = 3;
		let response;
		while (
			retries < MAX_RETRIES &&
			(response === undefined || response.status === 404)
		) {
			// try to fetch data from api
			try {
				response = await fetch(
					// `http://127.0.0.1:200/api/categories/${categoryId}/phrases/?filter_by_id=${number}`
					`	https://motivational-api-2kzjz.ondigitalocean.app/api/categories/${categoryId}/phrases/?filter_by_id=${number}`
				);
				localStorage.setItem("currentID", number);
				console.log(`GET ${response.url} `);
				// if response status is 404, increment retries
				if (response.status === 404) {
					retries++;
				} else {
					// parse response to json
					const json = await response.json();
					// set data state
					setData(json);
					// set loadingImg state to false
					setLoadingImg(false);
				}
				// log response status and url
			} catch (error) {
				// log error
				console.error(error);
			}
			// wait for 1 second before retrying
			await new Promise((resolve) => setTimeout(resolve, 1000));
		}
		// retrieve previous selected numbers for current category from local storage
		const previousIdList =
			JSON.parse(localStorage.getItem(`previousid${categoryId}`)) || [];
		// if all numbers have been selected, remove the previousid array from local storage
		if (previousIdList.length === idLists[categoryId].length) {
			localStorage.removeItem(`previousid${categoryId}`);
		}
		window.history.pushState(
			{},
			"",
			`/categories/${categoryId}/phrases/${number}`
		);
	}
	return (
		<section className={styles.mainContainer}>
			{idLists.length <= 0 ? (
				<Loading />
			) : (
				<>
					<CategorySelect
						options={options}
						handleChangeCategory={handleChangeCategory}
						categoryId={categoryId}
						loading={loading}
						handleClick={handleClick}
						showSelect={showSelect}
					/>
				</>
			)}
			{loadingImg ? (
				<Loading />
			) : (
				<Phrase data={data} handleNextButton={handleNextButton} />
			)}
		</section>
	);
}

export default PhraseGet;
