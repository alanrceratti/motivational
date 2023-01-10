import "./App.scss";
import PhraseGet from "./endpoints/PhraseGet";
import Options from "./Options";

function App() {
	return (
		<section>
			<MyContext.Provider value={}
			<Options/>
			<PhraseGet />
		</section>
	);
}

export default App;
