import React, { useEffect, useState } from "react";
import styles from "../endpoints/PhraseGet.module.scss";
import money1 from "../Assets/money1.avif";
import money2 from "../Assets/money2.avif";
import money3 from "../Assets/money3.avif";

function PhraseGet() {
	const baseUrl = "C:/Users/Ceratti/Desktop/TI/Motivational_API";
	const [categoryId, setCategoryId] = React.useState(null);
	const [data, setData] = useState(null);

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	const number = randomNumber(1, 3);
	async function fetchData() {
		try {
			const response = await fetch(
				`http://127.0.0.1:200/api/categories/1/phrases/?filter_by_id=${number}`
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
function handleClickCategory(option) {
		setCategoryId(option);
	}

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
