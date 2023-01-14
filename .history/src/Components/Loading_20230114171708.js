import React from "react";
import styles from './'

function Loading(props) {
    const { loadingImg, data} =
		props;
	return (
		<>
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
		</>
	);
}

export { Loading };
