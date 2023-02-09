import React from "react";
import { CategorySelect } from "./CategorySelect";
import { Loading } from "./Loading";
import { Phrase } from "./Phrase";

const FirstLoad = () => {
	return (
		<div>
			<Phrase />
			<Loading />
		</div>
	);
};

export default FirstLoad;
