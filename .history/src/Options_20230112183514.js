import { useState } from "react";
import "../src/Options.module.scss";
// import { handleClickCategory } from "./endpoints/PhraseGet";

const Options = (props) => {
	return (
		<>
			<button onClick={props.onClick}>
				<span></span>
				<span></span>
				<span></span>
				<span></span> Choose a category
			</button>
			;
		</>
	);
};

export default Options;
