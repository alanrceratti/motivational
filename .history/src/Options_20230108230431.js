import React, { useEffect, useState } from "react";
import styles from "./Options.module.scss";
// import { handleClickCategory } from "./endpoints/PhraseGet";

function Options() {
	

	return (
		<>
			{loading ? (
				<p>Loading......</p>
			) : (
				<div className={styles.options}>
					<select>
						{options.map((option) => (
							<option
								key={option.id}
								// onClick={handleClickCategory}
							>
								{option.category_name}
							</option>
						))}
					</select>
				</div>
			)}
		</>
	);
}

export default Options;

// {
// 	/* <button>
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 						<span></span> Choose a category
// 					</button> */
// }
