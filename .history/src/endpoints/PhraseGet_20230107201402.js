import React, { useEffect, useState } from "react";
import styles from "../endpoints/PhraseGet.module.scss";
import money1 from "../Assets/money1.avif";
import money2 from "../Assets/money2.avif";
import money3 from "../Assets/money3.avif";

// function PhraseGet() {
// 	const [data, setData] = useState(null);

// 	useEffect(() => {
// 		async function fetchData() {
// 			const response = await fetch(
// 				"http://127.0.0.1:200/api/categories/1/phrases/?filter_by_id=1"
// 			);
// 			const json = await response.json();
// 			setData(json);
// 		}
// 		fetchData();
// 	}, []);
async function fetchData() {
	try {
	  const response = await fetch(
		"http://127.0.0.1:200/api/categories/1/phrases/?filter_by_id=1"
	  );
	  const json = await response.json();
	  setData(json);
	} catch (error) {
	  console.error(error);
	}


	return (
		<>
			<section className={styles.container}>
				<div className={styles.um}>
					<img src={money2} alt="money1" />
					<div>{data ? <h1>{data.phrase}</h1> : "Loading..."}</div>
				</div>
				{/* <div className={styles.dois}>
					<img src={money2} alt="money2" />
					{data ? <h1>{data.phrase}</h1> : "Loading..."}
				</div>
				<div className={styles.tres}>
					<img src={money3} alt="money2" />
					{data ? <h1>{data.phrase}</h1> : "Loading..."}
				</div> */}
			</section>
		</>
	);
}

export default PhraseGet;
