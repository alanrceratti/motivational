import React from 'react'
import styles from './Category'

function CategorySelect(props) {
    const { options, categoryId, handleChangeCategory } = props;

    return (
        <div className={styles.selectContainer}>
            <select
                className={styles.select}
                value={categoryId}
                onChange={handleChangeCategory}
            >
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CategorySelect
