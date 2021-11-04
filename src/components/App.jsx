import React from "react";
import Entry from "./Entry";
import emojipedia from "../emoji";

// function createEntry(emojidetails) {
// 	return (
// 		<Entry
// 			key={emojidetails.id}
// 			emoji={emojidetails.emoji}
// 			name={emojidetails.name}
// 			meaning={emojidetails.meaning}
// 		/>
// 	);
// }

function App() {
	return (
		<div>
			<h1>
				<span>emojipedia</span>
			</h1>
			<div id="dictionary">
				{emojipedia.map((emojidetails) => (
					<Entry
						key={emojidetails.id}
						emoji={emojidetails.emoji}
						name={emojidetails.name}
						meaning={emojidetails.meaning}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
