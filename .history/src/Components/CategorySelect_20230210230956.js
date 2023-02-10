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
		console.log(selectedCategory, handleSelectCategory);
		console.log("Selected Category:", selectedCategory);
	};
	function handleBoth(e) {
		handleClick(e);
		handleSelectCategory(e);
		handleChangeCategory(e);
	}

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
						<div className={styles.div} 
						>
							
							{console.log('selectedCategory:', selectedCategory)}
							{console.log('categoryIdFromLocalStorage:', categoryIdFromLocalStorage)}
							
							{options.map((option) => (
							{	  console.log('Option ID:', option.id);}
								<h1
									className={
										selectedCategory === option.id
											? `${styles.selected}`
											: `${styles.hh}`
									}
									onClick={handleBoth}
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
