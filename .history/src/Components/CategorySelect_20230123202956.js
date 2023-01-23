import React from "react";
import Options from "../Options";
import styles from "./CategorySelect.module.scss";
import Title from "./Title";

function CategorySelect(props) {
	const { options, handleChangeCategory, loading, handleClick, showSelect } =
		props;

	return (
		<section 
		className={styles.mainContainerr}>
			{loading ? (
				<p>Loading......</p>
			) : (
				<div className={styles.options}>
					<div>
						<Title className={styles.title} />
					</div>
					<Options onClick={handleClick} />
					<div style={{ display: showSelect ? "block" : "none" }}>
						<div className={styles.div}>
							{options.map((option) => (
								<h1
									className={styles.h1}
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
