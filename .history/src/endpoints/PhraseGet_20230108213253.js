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
	function handleClick(option) {
		setCategoryId(option);
	}

	return (
		<>
			<section className={styles.container}>
				<div className={styles.um}>
					{data && (
						<img
							src="https://elasticbeanstalk-eu-west-2-943477692074.s3.eu-west-2.amazonaws.com/money%20%281%29.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCWV1LXdlc3QtMiJHMEUCIQDtIpUtCx4TBu0hpuXKQilYtxg1rbGEBV%2BV%2FpYaCmj4jgIgH5SjagaAy12w3KBxVzEZIE3p2qTrAXBOHhaYnQz0Uasq5AIIZxAAGgw5NDM0Nzc2OTIwNzQiDK90oGEyj%2Bru5YeECCrBAq1%2Bo7iVHHkp%2BYw3i4XIAucrwVSddz3HDfZx78e3tyo35O%2F%2F1jw2gL1nL1GwyZ%2Bzm3ctwVVcS58kG6wcXIB2D8c5J4wcyK%2FtrWfqaEbws0BuTHYloD53o1ry3NTyvWrGnlmuHkVL7jxyCsdngJZfll4L3BuS2t%2BI96p5gVXwHy%2B6kZO7x05BU%2FzbNkuneum4%2FScT66v0T5G3o%2BYNPWonfBRNCx5QTm65gWzMewe76FdVl%2BzvoEz%2Fz9undlE0rkZbSxvl1AbTqPHm0hD%2F51ntpxqmrV9AHWPIGICoFRI%2BYStYGzv1952KrqyTgCkc%2B0JhnCcyjqAxPZeUFd2FeGWPLv9lSzsFAqCtHNm35Wglsc1IVK8pm0uM2Vz3rgq%2F0MNkWX3QAa4u63ZGp4XWjer3m4mq3d6yz23jhXd8KIbqS0Q65TC16uydBjqzAsfesdisUq2Z1wGZsBq3ts0UA3mgker68XHObrHwOG1FGHnIMAMoN87H3pQleyZg1ETH9Tvm9f1M1BPeujO2n1XeXWIxS37E721yONbvGyOSwRumptMsnps3hlEWn6khka0SH8nDHwo0sBsbgUoMfyf7ov%2FEdgnS2jOFfznFT0dDbrkVUKrk%2Bzxudtn8tLdgBBc0WLJx%2BxZ6IJ7pqHo1jkx4I325E%2BlnL5OHe3RhyiE0ZaDsMeOi1JIuxPvbOBktR3dENQ5lkSZo8OKXQlW8yFtjKnNb2pQv9lSt505QJUgEGFgdicryEsdqv1BcrRsWyVf%2B2V54gRvTC5MIJFdX2uNFOiwBdnj4xpMTK4QzvdXRGfxYEgEn9tsAcIDUbqNlcdvDnLZp9ChI9Pn%2FGnID8uabgDI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230108T213237Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5XK5HC2VBO5KZFG3%2F20230108%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=11343964905c4e3be10daba9542fba5aa03c2948f1d9dc0725217336d72610ae"
							alt="image_phrase"
						/>
					)}
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
