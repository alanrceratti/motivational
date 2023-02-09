import React from "react";
import { CategorySelect } from "./CategorySelect";
import { Loading } from "./Loading";

const FirstLoad = () => {
	return (
		<div>
			<Loading />
			<CategorySelect />
		</div>
	);
};

export default FirstLoad;
