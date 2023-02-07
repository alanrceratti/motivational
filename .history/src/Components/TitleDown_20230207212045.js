import React from "react";
import { useLocation } from "react-router-dom";


import styles from "./TitleDown.module.scss";

const TitleDown = () => {
	
	return (
		<section>
			<div className={styles.container}>
				<h1>
					Loved our quote?<br></br> Why not share your favorite?
				</h1>

				<a
					href="https://www.redbubble.com/people/alanrceratti/shop?asc=u"
					rel="noreferrer"
					target="_blank"
				>
					<button className={styles.button2}>SHARE NOW</button>
				</a>
			</div>
		</section>
	);
};

export default TitleDown;
