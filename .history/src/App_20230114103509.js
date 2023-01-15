import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhraseGet from "./Components/PhraseGet";
import Options from "./Options";
import Home from "./Components/Home";
import "tailwindcss/utilities";
import "tailwindcss/dist/base.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/button" element={<Options />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;