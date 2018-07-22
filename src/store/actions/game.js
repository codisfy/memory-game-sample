import { CARD_FLIPPED, CARD_MATCHING, CARD_MATCHED, CARD_HIDDEN, CARD_HIDING} from "../actionTypes";

export function cardClicked(data) {
    return {
        type: CARD_FLIPPED,
        data
    }
}

export function cardMatching() {
    return {
        type: CARD_MATCHING
    }
}

export function cardMatched() {
    return {
        type: CARD_MATCHED
    }
}


export function cardHiding() {
    return {
        type: CARD_HIDING
    }
}

export function cardHidden() {
    return {
        type: CARD_HIDDEN
    }
}

export function handleCardClicked(data) {
    return dispatch => {

        dispatch(cardClicked(data));
        dispatch(cardMatching());
        dispatch(cardMatched());
        dispatch(cardHiding());
        setTimeout(() => {
            dispatch(cardHidden());
        }, 500)
        // one dispactcher should check is there are cards which do not have matching color and update state


        // let gameState = data.game.gameState;

        // if (data.cardState === constants.CARD_SHOWN || data.cardState === constants.CARD_MATCHING) {
        //     return;
        // }
        // let cards = mapCardState(data.game.cards, [data.id], constants.CARD_SHOWN);
        // const showingCards = cards.filter((c) => c.cardState === constants.CARD_SHOWN);
        // const ids = showingCards.map(c => c.id);

        // if (showingCards.length === 2 &&
        //     showingCards[0].color === showingCards[1].color) {
        //     cards = mapCardState(cards, ids, constants.CARD_MATCHING);
            // const matchingCards = cards.filter((c) => c.cardState === constants.CARD_MATCHING);
            // if (matchingCards.length === 16) {
            //     gameState = constants.GAME_WON;
            // }
        // } else if (showingCards.length === 2) {
        //     cards = mapCardState(cards, ids, constants.CARD_HIDDEN);
        // }

        // dispatch(cardClicked({ cards, gameState }));
    }
}
