import React from "react";
import { CategorySelect } from "./CategorySelect";
import { Loading } from "./Loading";
import { Phrase } from "./Phrase";
import PhraseGet from "./PhraseGet";

const FirstLoad = () => {
    function handleLoad() {
        window.cu
    }
	return (
		<div>
			<button onClick={handleLoad}>RELOAD</button>
			<Loading />
		</div>
	);
};

export default FirstLoad;
