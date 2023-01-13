import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhraseGet from "./Components/PhraseGet";
import Options from "./Options";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Hom />} />
					<Route path="/button" element={<Options />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
