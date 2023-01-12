import styles from "./Options.module.scss";
// import { handleClickCategory } from "./endpoints/PhraseGet";

function Options() {
	return (
		<>
			<button className={styles.options}>
				<span></span>
				<span></span>
				<span></span>
				<span></span> Choose a category
			</button>
			;
		</>
	);
}

export default Options;
