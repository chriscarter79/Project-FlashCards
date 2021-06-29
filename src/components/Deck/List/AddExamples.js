import { createDeck, createCard, listDecks } from "../../utils/api";

const data = [
	{
		id: 1,
		name: "Rendering in React",
		description:
			"React's component structure allows for quickly building a complex web application that relies on DOM manipulation. ",
		cards: [
			{
				id: 1,
				front: "Differentiate between Real DOM and Virtual DOM.",
				back: "Virtual DOM updates are faster but do not directly update the HTML",
				deckId: 1,
			},
			{
				id: 2,
				front: "How do you modify the state of a different React component?",
				back: "Not at all! State is visible to the component only.",
				deckId: 1,
			},
			{
				id: 3,
				front: "How do you pass data 'down' to a React child component?",
				back: "As properties or props",
				deckId: 1,
			},
			{
				cards: [],
				front: "b",
				back: "b",
				deckId: 1,
				id: 7,
			},
		],
	},
	{
		name: "React Router",
		description:
			"React Router is a collection of navigational components that compose declaratively with your application.",
		id: 2,
		cards: [
			{
				front:
					"What path will match the follow Route?\n<Route>\n  <NotFound />\n</Route>",
				back: "All paths. A route with no path matches all URL's",
				deckId: 2,
				id: 4,
			},
			{
				front: "What does <Switch> do?",
				back: "Renders the first matching child <Route> ",
				deckId: 2,
				id: 5,
			},
		],
	},
];

function AddExamples({ setDecks }) {
	const handleAdd = async () => {
		// iterate through all decks
		data.forEach(async ({ name, description, cards }) => {
			// add the deck
			const addedDeck = await createDeck({ name, description });

			// iterate through all cards
			cards.forEach(async ({ front, back }) => {
				// add the cards to the deck
				await createCard(addedDeck.id, { front, back });
			});
		});

		setDecks(await listDecks());
	};
	return (
		<div className="mt-4">
			<button className="btn btn-success" onClick={handleAdd}>
				<span className="oi oi-plus"></span> Examples
			</button>
		</div>
	);
}

export default AddExamples;
