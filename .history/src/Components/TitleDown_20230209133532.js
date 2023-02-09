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
	const URL2 = URL;
	function handleClick2() {
		SetURL(FullURL);
		console.log("HASUIHD", URL);
	}

	return (
		<section>
			<div className={styles.container}>
				<h1>
					Loved our quote?<br></br> Why not share your favorite?
				</h1>
				<button className={styles.button2} onClick={handleClick2}>
					SHARE NOW
				</button>
				<div className={styles.share}></div>
				<div>
					<EmailShareButton url={URL2}>
						<FacebookIcon size={32} round={true} />
					</EmailShareButton>
				</div>{" "}
				<div>
					<FacebookShareButton url={URL2}>
						<FacebookIcon size={32} round={true} />
					</FacebookShareButton>
				</div>{" "}
				<div>
					<FacebookShareCount url={URL2}>
						<FacebookIcon size={32} round={true} />
					</FacebookShareCount>
				</div>{" "}
				<div>
					<LinkedinShareButton url={URL2}>
						<FacebookIcon size={32} round={true} />
					</LinkedinShareButton>
				</div>{" "}
				<div>
					<FacebookShareButton url={URL2}>
						<FacebookIcon size={32} round={true} />
					</FacebookShareButton>
				</div>
				<div>
					<FacebookShareButton url={URL2}>
						<FacebookIcon size={32} round={true} />
					</FacebookShareButton>
					, FacebookShareButton, ,
					LinkedinShareButton, TwitterShareButton,
					WhatsappShareButton,
				</div>
			</div>
		</section>
	);
};

export default TitleDown;
