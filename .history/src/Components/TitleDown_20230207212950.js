import React from "react";
import {
	EmailShareButton,
	FacebookShareButton,
	FacebookShareCount,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from "react-share";
import {
	EmailIcon,
	FacebookIcon,
	FacebookMessengerIcon,
	LinkedinIcon,
	TwitterIcon,
	WhatsappIcon,
} from "react-share";

import styles from "./TitleDown.module.scss";

const TitleDown = (props) => {
	const { URl } = props;
	return (
		<section>
			<div className={styles.container}>
				<h1>
					Loved our quote?<br></br> Why not share your favorite?
				</h1>

				<a href={URL} rel="noreferrer" target="_blank">
					<button className={styles.button2}>SHARE NOW</button>
					<div>
						<EmailIcon size={32} round={true} />
						<FacebookIcon size={32} round={true} />
						<FacebookMessengerIcon size={32} round={true} />
						<LinkedinIcon size={32} round={true} />
						<TwitterIcon size={32} round={true} />
						<WhatsappIcon size={32} round={true} />
						<FacebookShareCount url={URL} />
					</div>
				</a>
			</div>
		</section>
	);
};

export default TitleDown;
