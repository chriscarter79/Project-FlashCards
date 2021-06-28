import React, {useState, useEffect} from "react";
import {listDecks, listCards} from "../../utils/api";


function Home() {
    const [deck, setDeck] = useState([])
    const [cards, setCards] = useState([])

    useEffect(() => {
        async function loadDeck() {
            const deckData = await listDecks()
            const cardData = await listCards(1)
            setDeck(deckData);
            setCards(cardData)
        }
        loadDeck();
    },[])

    console.log(deck)
    console.log(cards)

    return <button className="btn btn-primary"><span className="oi oi-eye" /> View</button>
}

export default Home;