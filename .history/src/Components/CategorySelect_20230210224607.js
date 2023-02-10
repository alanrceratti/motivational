import React, { useState } from "react";
import Options from "../Options";
import styles from "./CategorySelect.module.scss";
import Title from "./Title";
import { motion } from "framer-motion";

function CategorySelect(props) {
	const { options, handleChangeCategory, loading, handleClick, showSelect } =
		props;

	const [selectedCategory, setSelectedCategory] = useState(null);

	const handleSelectCategory = (e) => {
		setSelectedCategory(e.target.dataset.categoryId);
		console.log(selectedCategory, id);
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
					<Options onClick={handleSelectCategory} />
					<div style={{ display: showSelect ? "block" : "none" }}>
						<div className={styles.div}>
							{options.map((option) => (
								<h1
									className={
										selectedCategory === option.id
											? `${styles.selected}`
											: `${styles.hh}`
									}
									onClick={handleSelectCategory}
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
