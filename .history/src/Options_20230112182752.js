import "../src/Options.module.scss";
// import { handleClickCategory } from "./endpoints/PhraseGet";


    const [showSelect, setShowSelect] = useState(false);
  
    const handleClick = () => {
      setShowSelect(!showSelect);
    }
  
    return (
      <button onClick={handleClick}>Select an item</button>
    );
  };
function Options() {
	return (
		<>
			<button>
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
