import "./App.scss";
import { BrowserRouter, Routes, Route } from "react";
import PhraseGet from "./endpoints/PhraseGet";
import Options from "./Options";

function App() {
	return (
		<>
			<BrowserRouter>
			<Routes>
				
			</Routes>
				<section>
					<PhraseGet />
				</section>
				<Options />
			</BrowserRouter>
		</>
	);
}

export default App;
