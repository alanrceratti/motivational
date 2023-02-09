import React from "react";
import { Loading } from "./Loading"; // import the Loading component

const FirstLoad = () => {
	function handleLoad() {
		history.push(`/categories/${1}/phrases/8`);
	}

	return (
		<div>
			<button onClick={handleLoad}>RELOAD</button>
			<Loading />
		</div>
	);
};

export default FirstLoad;
