import React, { useEffect } from "react";
import { Loading } from "./Loading";
import { useNavigate } from "react-router-dom";

const FirstLoad = (props) => {
	const { categoryId, number } = props;
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			// 👇 Redirects to about page, note the `replace: true`
			navigate(`/categories/1/phrases/${number}`, {
				replace: true,
			});
		}, 2000);
	}, []);

	return (
		<div>
			<Loading />
		</div>
	);
};

export default FirstLoad;
