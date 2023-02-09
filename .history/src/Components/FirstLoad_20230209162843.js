import React, { useEffect } from "react";
import { Loading } from "./Loading"; // import the Loading component
import { useNavigate } from "react-router-dom";

const FirstLoad = () => {
	function handleLoad() {}
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			// 👇 Redirects to about page, note the `replace: true`
			navigate("/categories/1/phrases/8", { replace: true });
		}, 3000);
	}, []);

	return (
		<div>
			<button onClick={handleLoad}>RELOAD</button>
			<Loading />
		</div>
	);
};

export default FirstLoad;
