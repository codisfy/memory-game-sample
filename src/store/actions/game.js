import { CARD_FLIPPED, CARD_MATCHING, CARD_MATCHED, CARD_HIDDEN, 
    CARD_HIDING, TIMER_TICK, TIMER_START, TIMER_STOP, NEW_GAME} from "../actionTypes";

export let timer = null;

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

export const tick = () => ({ type: TIMER_TICK });



export function handleCardClicked(data) {
    return dispatch => {

        dispatch(cardClicked(data));
        dispatch(cardMatching());
        dispatch(cardMatched());
        dispatch(cardHiding());
        setTimeout(() => {
            dispatch(cardHidden());
        }, 500)
    }
}

const timerStop = () => {
  return { type: TIMER_STOP };
}

export function handleGameLoaded() {
    return dispatch => {
        debugger;
        clearInterval(timer);
        timer = setInterval(() => {
            dispatch(tick());
            dispatch(timerStop());
        }, 1000);
        dispatch({ type: TIMER_START });
        dispatch(tick())
    }
}

export function handledNewGame() {
    return dispatch => {
         dispatch(newGame());
         dispatch(handleGameLoaded());
    }
    
}


