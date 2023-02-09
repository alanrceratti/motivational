import React from "react";
import { CategorySelect } from "./CategorySelect";
import { Loading } from "./Loading";
import { Phrase } from "./Phrase";
import PhraseGet from "./PhraseGet";

const FirstLoad = () => {
	return (
		<div>
			<PhraseGet />
			<Loading />
		</div>
	);
};

export default FirstLoad;
