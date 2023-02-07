import React, { useEffect, useState } from "react";
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

const TitleDown = () => {
	const FullURL = window.location.href;
	const [URL, SetURL] = useState("");

	function handleClick2() {
		console.log("HASUIHD", URL);
	}
	useEffect(() => handleClick2());

	return (
		<section>
			<div className={styles.container}>
				<h1>
					Loved our quote?<br></br> Why not share your favorite?
				</h1>

				<button className={styles.button2} onClick={handleClick2}>
					SHARE NOW
				</button>
				<div>
					<EmailIcon size={32} round={true} />

					<FacebookMessengerIcon size={32} round={true} />
					<LinkedinIcon size={32} round={true} />
					<TwitterIcon size={32} round={true} />
					<WhatsappIcon size={32} round={true} />
				</div>

				<FacebookShareButton url={FullURL}>
					<FacebookIcon size={32} round={true} />
				</FacebookShareButton>
			</div>
		</section>
	);
};

export default TitleDown;