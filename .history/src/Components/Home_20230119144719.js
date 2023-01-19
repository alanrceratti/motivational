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
			<CategorySelect
				options={props.options}
				handleChangeCategory={props.handleChangeCategory}
				categoryId={props.categoryId}
				loading={props.loading}
				handleClick={props.handleClick}
				showSelect={props.showSelect}
			/>

			<TitleDown />
		</div>
	);
};

export default Home;
