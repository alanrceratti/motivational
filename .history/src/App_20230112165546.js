import "./App.scss";
import PhraseGet from "./endpoints/PhraseGet";
import Options from "./Options";

function App() {
	return (
		<section>
			<PhraseGet />
			<Options />
		</section>
	);
}

export default App;
