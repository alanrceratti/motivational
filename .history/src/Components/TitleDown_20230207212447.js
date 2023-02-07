import React from "react";
import {
	EmailShareButton,
	FacebookShareButton,
	LinkedinShareButton,
	OKShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from "react-share";
import {
	EmailIcon,
	FacebookIcon,
	FacebookMessengerIcon,
	LinkedinIcon,
	OKIcon,
	TwitterIcon,
	WhatsappIcon,
} from "react-share";

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
					<EmailIcon size={32} round={true} />
					<FacebookIcon size={32} round={true} />
					<TwitterIcon size={32} round={true} />
					<TwitterIcon size={32} round={true} />
					<TwitterIcon size={32} round={true} />
					<TwitterIcon size={32} round={true} />
					,
	,
	FacebookMessengerIcon,
	LinkedinIcon,
	OKIcon,
	TwitterIcon,
	WhatsappIcon,
				</a>
			</div>
		</section>
	);
};

export default TitleDown;
