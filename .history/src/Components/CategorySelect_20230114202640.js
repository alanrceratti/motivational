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
				<div className={styles.options}>
					<Options onClick={handleClick} />
					<select
						style={{ display: showSelect ? "block" : "none" }}
						onChange={handleChangeCategory}
					>
						{options.map((option) => (
							<h1 key={option.id} value={option.id}>
								{option.category_name}
							</h1>
						))}
					</select>
				</div>
			)}
		</section>
	);
}

export { CategorySelect };