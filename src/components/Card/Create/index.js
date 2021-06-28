import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../../../utils/api";
import CardForm from "../Form"

function CardCreate(){
    const history = useHistory();
    const { deckId } = useParams();
    const { deck, setDeck } = useState({ cards: [] });

    useEffect(() => {
        readDeck(deckId).then(setDeck);
    }, [deckId]);

    function 

}