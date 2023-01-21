import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./TitleDown.module.scss";

const TitleDown = () => {
	let location = useLocation();
	return (
		<section>
			<div className={styles.container}>
				<h1>
					Loved our quote? Why not buy something with your favorite?
				</h1>
				
				<button
					className={styles.button2}
					type="submit"
					formaction="https://www.redbubble.com/people/alanrceratti/shop?asc=u"
				>
					SHOP NOW
				</button>
			</div>
		</section>
	);
};

export default TitleDown;
