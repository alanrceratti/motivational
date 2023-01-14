import React from "react";

function Phrase(props) {
	const { data } = props;
	return (
        <section></section>
		<div>
			{data ? (
				<div>
					<img src={data.img} alt={data.phrase} />
					<p>{data.phrase}</p>
				</div>
			) : (
				<p>No data</p>
			)}
		</div>
	);
}

export { Phrase };
