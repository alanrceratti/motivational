import "./App.scss";
import PhraseGet from "./endpoints/PhraseGet";
import Options from "./Options";

function App() {
	return (
		<section>
			<MyContext.Provider
			<Options/>
			<PhraseGet />
		</section>
	);
}

export default App;
