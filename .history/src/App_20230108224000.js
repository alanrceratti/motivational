import "./App.scss";
import PhraseGet from "./endpoints/PhraseGet";
import Options from "./Options";

function App() {
	return (
		<section>
			<MyContext.Provider value={{ sate, dispatch }}>
				<Options />
			</MyContext.Provider>
			<PhraseGet />
		</section>
	);
}

export default App;
