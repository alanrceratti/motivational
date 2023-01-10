import "./App.scss";
import PhraseGet from "./endpoints/PhraseGet";
import Options from "./Options";

function App() {
	return (
		<section>
			<MyContext.Provider value={{ sate, dispatch}}></MyContext.Provider>
			<Options/>
			<PhraseGet />
		</section>
	);
}

export default App;
