import React, { useState } from "react";

function CategorySelect(props) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { options, handleChangeCategory, loading, handleClick, showSelect } = props;

  const handleClickBoth = (e) => {
    handleChangeCategory(e);
    handleSelectCategory(e);
  };

  const handleSelectCategory = (e) => {
    setSelectedCategory(e.target.dataset.categoryId);
  };

  return (
    ...
      {options.map((option) => (
        <h1
          className={
            option.id === selectedCategory
              ? `${styles.h1} ${styles.selected}`
              : styles.h1
          }
          onClick={(e) => handleClickBoth(e)}
          key={option.id}
          data-category-id={option.id}
        >
          {option.category_name}
        </h1>
      ))}
    ...
  );
}
