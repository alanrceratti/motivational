import React from "react";

import { Loading } from "./Loading";

const FirstLoad = () => {
	function handleLoad() {
		const reload = window.location.reload;
		reload();
	}
	return (
		<div>
			<button onClick={handleLoad}>RELOAD</button>
			<Loading />
		</div>
	);
};

export default FirstLoad;
