import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import { Loading } from "./Components/Loading";

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
						<Route path="/" element={<Home />} />

						{/* <Route path="/button" element={<Loading />} /> */}
						<Route path="*" element={<div>Page not found</div>} />
						<Route path='/loading' element={<Loading/>}
					</Routes>
				</BrowserRouter>
			</section>
		</>
	);
}

export default App;
