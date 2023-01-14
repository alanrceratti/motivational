import React from "react";
import "./Loading.module.scss";

function Loading() {
	return (
		<>
			<div c="loader">
				<div c="loader-square"></div>
				<div c="loader-square"></div>
				<div c="loader-square"></div>
				<div c="loader-square"></div>
				<div c="loader-square"></div>
				<div c="loader-square"></div>
				<div c="loader-square"></div>
			</div>
		</>
	);
}

export { Loading };
