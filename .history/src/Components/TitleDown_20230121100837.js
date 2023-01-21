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
				<form>
					<a
						href="https://www.redbubble.com/people/alanrceratti/shop?asc=u"
						rel="noreferrer"
						target="_blank"
					>
						<button className={styles.button2}>SHOP NOW</button>
					</a>
				</form>
			</div>
		</section>
	);
};

export default TitleDown;
