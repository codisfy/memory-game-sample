import { CARD_FLIPPED, CARD_MATCHING, CARD_MATCHED, CARD_HIDDEN, 
    CARD_HIDING, NEW_GAME, GAME_LOST} from "../actionTypes";



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

        dispatch(cardClicked(data));
        dispatch(cardMatching());
        dispatch(cardMatched());
        dispatch(cardHiding());
        setTimeout(() => {
            dispatch(cardHidden());
        }, 1000)
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