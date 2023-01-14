

		// if there are still numbers available in filteredIdList array
		if (filteredIdList.length > 0) {
			const randomIndex = Math.floor(
				Math.random() * filteredIdList.length
			);
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
		} else {
			// if there are no more numbers available, remove the previousid1 array from local storage and log a message
			localStorage.removeItem(`previousid${selectedCategoryId}`);
			console.log("acabou o 1");
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
	}, [categoryId]);

	async function fetchData() {
		let retries = 0;
		const MAX_RETRIES = 1;
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
		const previousIdList =
			JSON.parse(localStorage.getItem(`previousid${categoryId}`)) || [];
		if (previousIdList.length === idLists[categoryId].length) {
			localStorage.removeItem(`previousid${categoryId}`);
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
