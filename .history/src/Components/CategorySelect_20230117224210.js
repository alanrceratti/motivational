import React from "react";
import Options from "../Options";
import styles from "./CategorySelect.module.scss";

function CategorySelect(props) {
	const { options, handleChangeCategory, loading, showSelect } = props;

	return (
		<section className={styles.mainContainer}>
			{loading ? (
				<p>Loading......</p>
			) : (
				<div className={styles.options}>
					<div style={{ display: showSelect ? "block" : "none" }}>
						<div>
							{options.map((option) => (
								<h1
									onClick={handleChangeCategory}
									key={option.id}
									data-category-id={option.id}
								>
									{option.category_name}
								</h1>
							))}
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

export { CategorySelect };
