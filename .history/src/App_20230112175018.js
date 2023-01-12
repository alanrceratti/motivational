import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhraseGet from "./endpoints/PhraseGet";
import Options from "./Options";

function App() {
	return (
		<>
		<BrowserRouter></BrowserRouter>
			<section>
				<PhraseGet />
			</section>
			<Options />
		</>
	);
}

export default App;
