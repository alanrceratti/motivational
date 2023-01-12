import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhraseGet from "./endpoints/PhraseGet";
import Options from "./Options";

function App() {
	return (
		<><
			<section>
				<PhraseGet />
			</section>
			<Options />
		</>
	);
}

export default App;
