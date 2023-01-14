import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhraseGet from "./Components/PhraseGet";
import Options from "./Options";
import Home from "./Components/Home";
import { Loading } from "./Components/Loading";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/button" element={<Loading />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
