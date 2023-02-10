import React, { useState } from "react";
import Options from "../Options";
import styles from "./CategorySelect.module.scss";
import Title from "./Title";
import { motion } from "framer-motion";

function CategorySelect(props) {
	const {
		options,
		handleChangeCategory,
		loading,
		handleClick,
		showSelect,
		categoryIdFromLocalStorage,
	} = props;

	const [selectedCategory, setSelectedCategory] = useState(null);
	const handleSelectCategory = (e) => {
		setSelectedCategory(e.target.dataset.categoryId);
		console.log(e.target.dataset.categoryId);
	};

	const handleClickBoth = (e) => {
		handleSelectCategory(e);
	};

	return (
		<section className={styles.mainContainerr}>
			{loading ? (
				<p>Loading......</p>
			) : (
				<motion.div
					animate={{ y: 0 }}
					initial={{ y: -20 }}
					transition={{ duration: 0.5 }}
					className={styles.options}
				>
					<div>
						<Title className={styles.title} />
					</div>
					<Options onClick={handleClick} />
					<div style={{ display: showSelect ? "block" : "none" }}>
						<div className={styles.div}>
							{options.map((option) => (
								<h1
									className={
										IdFromLocalStorage === selectedCategory
											? `${styles.selected}`
											: styles.hh
									}
									onClick={(e) => handleClickBoth(e)}
									key={option.id}
									data-category-id={option.id}
								>
									{option.category_name}
								</h1>
							))}
						</div>
					</div>
				</motion.div>
			)}
		</section>
	);
}

export { CategorySelect };
