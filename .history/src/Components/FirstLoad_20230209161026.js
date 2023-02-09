import React from "react";
import { CategorySelect } from "./CategorySelect";
import { Loading } from "./Loading";
import { Phrase } from "./Phrase";
import PhraseGet from "./PhraseGet";

const FirstLoad = (props) => {
	const {
		options,
		handleChangeCategory,
		loading,
		handleClick,
		showSelect,
		categoryId,
	} = props;
	return (
		<div>
			<Loading />
		</div>
	);
};

export default FirstLoad;
