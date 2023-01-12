import "../src/Options.module.scss";
// import { handleClickCategory } from "./endpoints/PhraseGet";


 
  
    const handleClick = () => {
      setShowSelect(!showSelect);
    }
  
    return (
      <button onClick={handleClick}>Select an item</button>
    );
  };
function Options() {
    const [showSelect, setShowSelect] = useState(false);
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
