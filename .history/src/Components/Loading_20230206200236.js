import React, { useState } from "react";
import "./Loading.scss";

function Loading(props) {
	// state variable to indicate if the data is currently being loaded
	const [loadingState, setLoadingState] = useState(true);

	// use the callback function passed in the props to update the state
	const updateLoadingState = (state) => {
		props.setLoadingState(state);
		setLoading(state);
	};

	return (
		<>
			<div className="loader" setLoadingState={setLoading}>
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
