import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import { Loading } from "./Components/Loading";
import PhraseGet from "./Components/PhraseGet";
import { Phrase } from "./Components/Phrase";

function App() {
	return (
		<>
			<section className="App">
				<BrowserRouter>
					<Routes>
						<Route
							path="/categories/:UrlCategoryId/phrases/:UrlPhraseId"
							element={<Home />}
						/>
						<Route
							path="/categories/1/phrases/8"
							element={<PhraseGet />}
						/>

						{/* <Route path="/button" element={<Loading />} /> */}
						<Route path="*" element={<div>Page not found</div>} />
					</Routes>
				</BrowserRouter>
			</section>
		</>
	);
}

export default App;
