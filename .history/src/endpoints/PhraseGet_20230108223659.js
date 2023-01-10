import React, { useEffect, useState } from "react";
import styles from "../endpoints/PhraseGet.module.scss";

function PhraseGet() {
	const [categoryId, setCategoryId] = React.useState(null);
	const [data, setData] = useState(null);
	const idcategory = categoryId;
	const MyContext = React.createContext();


	
	// function handleClickCategory(option) {
	// 	setCategoryId(option);
	// }

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	const number = randomNumber(1, 3);

	async function fetchData() {
		try {
			const response = await fetch(
				`http://127.0.0.1:200/api/categories/${idcategory}/phrases/?filter_by_id=${number}`
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
