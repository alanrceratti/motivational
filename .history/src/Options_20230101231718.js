import React, { useEffect, useState } from "react";
import styles from "./Options.module.scss";

const Options = () => {
	const [option, setOptions] = useState([]);

	async function fetchOptions() {
		const response = await fetch("http://127.0.0.1:8000/api/categories/");
		const json = await response.json();
		setOptions(json);
	}

	useEffect(() => {
		fetchOptions();
		console.log(option);
	}, []);

	function renderOptions(option) {
		return option.map((item) => (
			<option key={item.id} value={item.id}>
				{item.name}
			</option>
		));
	}

	return (
		<>
			<select>{renderOptions(option)}</select>
			<button>
				<span></span>
				<span></span>
				<span></span>
				<span></span> Choose a category
			</button>
		</>
	);
};

export default Options;
