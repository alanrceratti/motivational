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
							path={`/categories/:categoryId/phrases/filter_by_id=:number}
							element={<Home />}
						>
							{/* <Route
								path={`/categories/:UrlCategoryId/phrases/?filter_by_id=:UrlPhraseId`}
								element={<Phrase />}
							/> */}
						</Route>

						{/* <Route path="/button" element={<Loading />} /> */}
					</Routes>
				</BrowserRouter>
			</section>
		</>
	);
}

export default App;
