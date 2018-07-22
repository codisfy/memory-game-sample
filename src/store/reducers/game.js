import { NEW_GAME, GAME_WON, GAME_LOST } from "../actionTypes";
import { constants } from "../../constants";

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
    gameState: constants.GAME_STARTED
};

const game = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case NEW_GAME:
            return {
                cards: shuffle(boardBoxes), 
                gameState: constants.GAME_STARTED
            }
        case GAME_LOST:
             return {...state, gameState:constants.GAME_LOST}
        case GAME_WON:
             return {...state, gameState:constants.GAME_WON}
             //todo fix the state, it should not be here or there is no need of card dispatcher
        case "CARD_FLIPPED":
             return action.game
        default:
            return state;
    }
}

export default game;