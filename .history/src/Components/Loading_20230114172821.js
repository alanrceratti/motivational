import React from "react";
import "./Loading.module.scss";

function Loading() {
	return (
		<>
			<div class="loader">
				<div class="loader-square"></div>
				<div class="loader-square"></div>
				<div class="loader-square"></div>
				<div class="loader-square"></div>
				<div class="loader-square"></div>
				<div class="loader-square"></div>
				<div class="loader-square"></div>
			</div>
		</>
	);
}

export { Loading };
