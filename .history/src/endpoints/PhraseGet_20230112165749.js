
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
