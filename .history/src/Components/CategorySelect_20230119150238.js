import React from "react";
import Options from "../Options";
import styles from "./CategorySelect.module.scss";
import Title from "./Title";

function CategorySelect(props) {
	const { options, handleChangeCategory, loading, handleClick, showSelect } =
		props;

	return (
		<section>
			<div className={styles.mainContainerr}>
				{loading ? (
					<p>Loading......</p>
				) : (
					<div>
					<Title className={styles.title} />
				</div>
					<div className={styles.options}>
						<Options onClick={handleClick} />
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
			</div>
		</section>
	);
}

export { CategorySelect };
