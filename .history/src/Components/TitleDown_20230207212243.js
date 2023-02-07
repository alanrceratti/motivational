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
	HatenaIcon,
	InstapaperIcon,
	LineIcon,
	LinkedinIcon,
	LivejournalIcon,
	MailruIcon,
	OKIcon,
	PinterestIcon,
	PocketIcon,
	RedditIcon,
	TelegramIcon,
	TumblrIcon,
	TwitterIcon,
	ViberIcon,
	VKIcon,
	WeiboIcon,
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
				</a>
			</div>
		</section>
	);
};

export default TitleDown;