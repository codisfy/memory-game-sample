import { CARD_FLIPPED, CARD_MATCHED } from "../actionTypes";


const message = (state = [], action) => {
    switch (action.type) {
        case LOAD_MESSAGE:
            return [...action.messages];
        case REMOVE_MESSAGE: 
            return state.filter(message => message._id !== action.id);
        default:
            return state;
    }
}

export default message;