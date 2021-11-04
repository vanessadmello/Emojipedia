import React from "react";

function Entry(props) {
	return (
		<dl className="dict-card">
			<dt className="emoji">{props.emoji}</dt>
			<dt className="name">{props.name}</dt>
			<dd className="description">{props.meaning}</dd>
		</dl>
	);
}
export default Entry;
