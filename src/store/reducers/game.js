import { NEW_GAME, GAME_WON, GAME_LOST, CARD_FLIPPED, CARD_MATCHED,
     CARD_MATCHING, CARD_HIDDEN, CARD_HIDING, TIMER_START, TIMER_TICK, TIMER_STOP } from "../actionTypes";
import { constants } from "../../constants";
import { cardClicked, cardMatching, cardMatched, cardHiding, cardHidden, timerTick, timerStop } from "../../helpers/game"

const colors = [
    'red', 'green', 'blue', 'black', 'yellow', 'pink', 'silver', 'orange'];
const boardBoxes = [];
let counter = -1;
colors.forEach(function (color, i) {
    let box = {
        id: ++counter,
        color: color,
        cardState: constants.CARD_HIDDEN
    }
    boardBoxes.push(box);
    boardBoxes.push({ ...box, id: ++counter });
})

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const DEFAULT_STATE = {
    cards: shuffle(boardBoxes),
    gameState: constants.GAME_STARTED, 
    timer: constants.TOTAL_TIME
};

const game = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case NEW_GAME:
            return {
                cards: shuffle(boardBoxes), 
                gameState: constants.GAME_STARTED,
                timer: constants.TOTAL_TIME
            }
        case GAME_LOST:
             return {...state, gameState:constants.GAME_LOST}
        case GAME_WON:
             return {...state, gameState:constants.GAME_WON}
        case CARD_FLIPPED:
             return cardClicked(state, action.data);
        case CARD_MATCHING:
             return cardMatching(state);
        case CARD_MATCHED:
             return cardMatched(state);
        case CARD_HIDING:
             return cardHiding(state);
        case CARD_HIDDEN:
             return cardHidden(state);
        case TIMER_START:
             return state;
        case TIMER_STOP:
             return timerStop(state);
        case TIMER_TICK:
             return timerTick(state);
        default:
            return state;
    }
}

export default game;