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
					<div style={{ display: showSelect ? "block" : "none" }}>
						<div>
							{options.map((option) => (
								<h1
									onChange={handleChangeCategory}
									key={option.id}
									value={option.id}
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
