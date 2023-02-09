import React from "react";
import { CategorySelect } from "./CategorySelect";
import { Loading } from "./Loading";
import { Phrase } from "./Phrase";
import PhraseGet from "./PhraseGet";

const FirstLoad = (props) => {
	const { options, handleChangeCategory, loading, handleClick, showSelect } =
		props;
	return (
		<div>
			<CategorySelect
				options={options}
				handleChangeCategory={handleChangeCategory}
				categoryId={categoryId}
				loading={loading}
				handleClick={handleClick}
				showSelect={showSelect}
			/>

			<Loading />
		</div>
	);
};

export default FirstLoad;
