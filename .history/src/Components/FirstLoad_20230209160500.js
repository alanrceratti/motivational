import React from "react";
import { CategorySelect } from "./CategorySelect";
import { Loading } from "./Loading";

const FirstLoad = () => {
	return (
		<div>
			<CategorySelect />
			<Loading />
		</div>
	);
};

export default FirstLoad;
