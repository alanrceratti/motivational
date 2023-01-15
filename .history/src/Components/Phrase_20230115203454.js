import React from "react";
import { Loading } from "./Loading";
import styles from "./Phrase.module.scss";

function Phrase(props) {
	const { data } = props;
	return (
		<section className={styles.um}>
			<div>
			<div class ="outerBorder">
        <div class ="innerBorder">
          <img        src="https://elasticbeanstalk-eu-west-2-943477692074.s3.eu-west-2.amazonaws.com/Money/money+(2).jpg" alt="fonferek falls" >
     </div>
        </div>

			</div>
		</section>
	);
}

export { Phrase };
