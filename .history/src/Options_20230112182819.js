import "../src/Options.module.scss";
// import { handleClickCategory } from "./endpoints/PhraseGet";
  
 
function Options() {
    const [showSelect, setShowSelect] = useState(false);
    const handleClick = () => {
        setShowSelect(!showSelect);
      }
	return (
		<>
			<button onClick={handleClick}>
				<span></span>
				<span></span>
				<span></span>
				<span></span> Choose a category
			</button>
			;
		</>
	);
}

export default Options;
