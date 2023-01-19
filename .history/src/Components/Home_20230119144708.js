import Options from "../Options";
import { CategorySelect } from "./CategorySelect";
import PhraseGet from "./PhraseGet";
import Title from "./Title";
import TitleDown from "./TitleDown";

import PhraseContext from "./PhraseGet";

const Home = (props) => {
	return (
		<div>
			<Title />
			<Options onClick={props.handleClick} />
			<CategorySelect 	options={props.options}
					handleChangeCategory={handleChangeCategory}
					categoryId={categoryId}
					loading={loading}
					handleClick={handleClick}
					showSelect={showSelect}/>
			<PhraseGet />
			<TitleDown />
		</div>
	);
};

export default Home;
