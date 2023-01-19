import styles from "../src/Options.module.scss";

const Options = (props) => {
	return (
		<>
			<div className={styles.button1}>
				<button className={styles.button1} onClick={props.onClick}>
					<span></span>
					<span></span>
					<span></span>
					<span></span> Choose a category
				</button>
			</div>
		</>
	);
};

export default Options;
