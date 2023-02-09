import React, { useEffect } from "react";
import { Loading } from "./Loading"; // import the Loading component
import { useNavigate } from "react-router-dom";

const FirstLoad = () => {
	const history = useNavigate();
	function handleLoad() {
		history.push(``);
	}
    const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // 👇 Redirects to about page, note the `replace: true`
      navigate('/about', { replace: true });
    }, 3000);
  }, []);

	return (
		<div>
			<button onClick={handleLoad}>RELOAD</button>
			<Loading />
		</div>
	);
};

export default FirstLoad;
