import { CARD_FLIPPED, CARD_MATCHING, CARD_MATCHED, CARD_HIDDEN, 
    CARD_HIDING, NEW_GAME, GAME_LOST} from "../actionTypes";

// keep track of timouts at max can be 2 
let timeout = [];
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

export function newGame() {
    return {
        type: NEW_GAME
    }
}

export function gameLost() {
    return {
        type: GAME_LOST
    }
}





export function handleCardClicked(data) {
    return dispatch => {
        if (timeout.indexOf(data.id) === -1 && timeout.length < 2) {
            dispatch(cardClicked(data));
            dispatch(cardMatching());
            dispatch(cardMatched());
            dispatch(cardHiding());
            clearTimeout(timeout[0]);
            timeout.push(setTimeout(() => {
                dispatch(cardHidden());
                if (timeout.length > 1) {
                    timeout = [];
                }
            }, 1000))
            
        }
    }
}


export function handledNewGame() {
    return dispatch => {
         dispatch(newGame());
    }
    
}


export function handleGameLost() {
 return dispatch => {
     dispatch(gameLost());
 }
}