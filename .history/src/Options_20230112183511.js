import { useState } from "react";
import "../src/Options.module.scss";
// import { handleClickCategory } from "./endpoints/PhraseGet";

function Options = (props) => {
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
}

export default Options;
