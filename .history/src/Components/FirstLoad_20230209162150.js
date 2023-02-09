import React from "react";
import { Loading } from "./Loading"; // import the Loading component

const FirstLoad = () => {
	function handleLoad() {
		const reload = window.location.reload;
		reload(); // call the reload function
	}

	return (
		<div>
			<button onClick={handleLoad}>RELOAD</button>
			<Loading />
		</div>
	);
};

export default FirstLoad;
