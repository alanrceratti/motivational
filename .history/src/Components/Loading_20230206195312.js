import React, { useState } from "react";
import "./Loading.scss";

function Loading(props) {
	// state variable to indicate if the data is currently being loaded
	const [loading, setLoading] = useState(true);
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
				<h1>Loading</h1>
			</div>
		</>
	);
}

export { Loading };
