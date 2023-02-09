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
	const [URL, setURL] = useState("");
	const [showIcons, setShowIcons] = useState(false);
	const URL2 = URL;
	function handleClick2() {
		setURL(FullURL);
		console.log("HASUIHD", URL);
	}

	function ShowItems() {
		setShowIcons(!showIcons);
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
			? <div  className={styles.share}> :
				
			
					}
					<div>
						<EmailShareButton url={URL2}>
							<EmailIcon size={32} round={true} />
						</EmailShareButton>
					</div>
					<div>
						<FacebookShareButton url={URL2}>
							<FacebookIcon size={32} round={true} />
						</FacebookShareButton>
					</div>
					<div>
						<FacebookShareButton url={URL2}>
							<FacebookMessengerIcon size={32} round={true} />
						</FacebookShareButton>
					</div>
					<div>
						<LinkedinShareButton url={URL2}>
							<LinkedinIcon size={32} round={true} />
						</LinkedinShareButton>
					</div>
					<div>
						<TwitterShareButton url={URL2}>
							<TwitterIcon size={32} round={true} />
						</TwitterShareButton>
					</div>
					<div>
						<WhatsappShareButton url={URL2}>
							<WhatsappIcon size={32} round={true} />
						</WhatsappShareButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TitleDown;
