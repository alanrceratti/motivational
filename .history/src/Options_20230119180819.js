import styles from "../src/Options.module.scss";

const Options = (props) => {
	return (
		<>
			<button className={styles.button1} onClick={props.onClick}>
				<span></span>
				<span></span>
				<span></span>
				<span></span> Choose a category
			</button>
		</>
	);
};

export default Options;
