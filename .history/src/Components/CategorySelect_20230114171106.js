import React from "react";
import styles from "./CategorySelect.module.scss";

function CategorySelect(props) {
	const { options, categoryId, handleChangeCategory } = props;

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
            </section>
	);
}

export {CategorySelect};
