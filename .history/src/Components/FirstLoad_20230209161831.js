import React from "react";
import { CategorySelect } from "./CategorySelect";
import { Loading } from "./Loading";
import { Phrase } from "./Phrase";
import PhraseGet from "./PhraseGet";

const FirstLoad = () => {
	return (
		<div>
		<button>RELOAD</button>
			<Loading />
		</div>
	);
};

export default FirstLoad;
