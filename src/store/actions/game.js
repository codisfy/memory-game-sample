import { CARD_FLIPPED } from "../actionTypes";
import { constants } from "../../constants";
import { mapCardState } from "../../helpers/card"

export function cardClicked(game) {
    return {
        type: CARD_FLIPPED,
        game
    }

}

export function handleCardClicked(data) {
    return dispatch => {

        let gameState = data.game.gameState;

        if (data.cardState === constants.CARD_SHOWN || data.cardState === constants.CARD_MATCHING) {
            return;
        }
        let cards = mapCardState(data.game.cards, [data.id], constants.CARD_SHOWN);
        const showingCards = cards.filter((c) => c.cardState === constants.CARD_SHOWN);
        const ids = showingCards.map(c => c.id);

        if (showingCards.length === 2 &&
            showingCards[0].color === showingCards[1].color) {
            cards = mapCardState(cards, ids, constants.CARD_MATCHING);
            const matchingCards = cards.filter((c) => c.cardState === constants.CARD_MATCHING);
            if (matchingCards.length === 16) {
                gameState = constants.GAME_WON;
            }
        } else if (showingCards.length === 2) {
            cards = mapCardState(cards, ids, constants.CARD_HIDDEN);
        }

        dispatch(cardClicked({ cards, gameState }));
    }
}
