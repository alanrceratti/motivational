import "./App.scss";
import PhraseGet from "./endpoints/PhraseGet";
import Options from "./Options";
import React, { useContext, useReducer } from "react";

function App() {
	const [state, dispatch] = useReducer(reducer, { categoryId: null });
	return (
		<section>
			<MyContext.Provider value={{ sate, dispatch }}>
				<Options />
			</MyContext.Provider>
			<PhraseGet />
		</section>
	);
}

export default App;
