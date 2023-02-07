import React from "react";
import { useParams } from "react-router-dom";

const UrlParams = () => {
	const { categoryId } = useParams();
	const { number } = useParams();
console.log(categoryId)
console.log(categoryId)

	return <div></div>;
};

export default UrlParams;
