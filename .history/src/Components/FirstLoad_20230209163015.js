import React, { useEffect } from "react";
import { Loading } from "./Loading";
import { useNavigate } from "react-router-dom";

const FirstLoad = () => {
    const {}
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			// 👇 Redirects to about page, note the `replace: true`
			navigate("/categories/1/phrases/8", { replace: true });
		}, 2000);
	}, []);

	return (
		<div>
			<Loading />
		</div>
	);
};

export default FirstLoad;
