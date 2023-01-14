import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import { Loading } from "./Components/Loading";

function App() {
	return (
		<> 	<div className="App">>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/button" element={<Loading />} />
				</Routes>
			</BrowserRouter>
			</div>
		</>
	);
}

export default App;
