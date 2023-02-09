import React from "react";
import { Loading } from "./Loading"; // import the Loading component

const FirstLoad = () => {
	function handleLoad() {
		
	}

	return (
		<div>
			<button onClick={handleLoad}>RELOAD</button>
			<Loading />
		</div>
	);
};

export default FirstLoad;
