import React from "react";
import Options from "../Options";
import styles from "./CategorySelect.module.scss";

function CategorySelect(props) {
	const { options, handleChangeCategory, loading, handleClick, showSelect } =
		props;

	return (
		<section className={styles.mainContainerr}>
			{loading ? (
				<p>Loading......</p>
			) : (
				<div>
					
					<div
						className={styles.options}
						style={{ display: showSelect ? "block" : "none" }}
					>
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
