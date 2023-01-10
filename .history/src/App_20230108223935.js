import "./App.scss";
import PhraseGet from "./endpoints/PhraseGet";
import Options from "./Options";

function App() {
	return (
		<section>
			MyContext.
			<Options/>
			<PhraseGet />
		</section>
	);
}

export default App;
