import React from "react";
import "./Loading.scss";

function Loading() {
	return (
		<>
			<div className="loader">
				<div className="loader-square"></div>
				<div className="loader-square"></div>
				<div className="loader-square"></div>
				<div className="loader-square"></div>
				<div className="loader-square"></div>
				<div className="loader-square"></div>
				<div className="loader-square"></div>
				<h1>Loading...</h1>
			</div>
		</>
	);
}

export { Loading };
