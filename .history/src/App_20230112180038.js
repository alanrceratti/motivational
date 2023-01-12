import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhraseGet from "./endpoints/PhraseGet";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<PhraseGet />} />
					<Route path="/" element={<PhraseGet />} />

				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
