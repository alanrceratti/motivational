import { useState } from "react";
import "../src/Options.module.scss";
// import { handleClickCategory } from "./endpoints/PhraseGet";

function Options() {
	const [showSelect, setShowSelect] = useState(false);

	return (
		<>
			<button>
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
