import React, { useState } from "react";
import "./Loading.scss";

function Loading(props) {
	const [loading, setLoading] = useState(true);

	// use the callback function passed in the props to update the state
	const updateLoadingState = (state) => {
		props.setLoadingState(state);
		setLoading(state);
	};

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
