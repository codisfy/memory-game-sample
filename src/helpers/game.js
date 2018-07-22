import { constants } from "../constants";
import {timer} from "../store/actions/game";

export const mapCardState = (cards, idsToChange, newCardState) => {
  return cards.map(c => {
    if (idsToChange.includes(c.id)) {
      return {
        ...c,
        cardState: newCardState
      };
    }
    return c;
  });
} 


export const cardClicked = (game, data) => {

  if (data.cardState === constants.CARD_SHOWN || data.cardState === constants.CARD_MATCHING) {
      return game;
  }
  let cards = mapCardState(game.cards, [data.id], constants.CARD_SHOWN);
  return {
    ...game,
    cards
  }
}


export const cardMatching = (game) => {
  let {cards} = game; 
  const showingCards = cards.filter((c) => c.cardState === constants.CARD_SHOWN);
  const ids = showingCards.map(c => c.id);

  if (showingCards.length === 2 &&
      showingCards[0].color === showingCards[1].color) {
      cards = mapCardState(cards, ids, constants.CARD_MATCHING);
  }

  return {
    ...game,
    cards
  }
}

export const cardMatched = (game) => {
  let {cards, gameState} = game;
  const matchingCards = cards.filter((c) => c.cardState === constants.CARD_MATCHING);
  if (matchingCards.length === constants.TOTAL_CARDS) {
      gameState = constants.GAME_WON;
  }
  return {
    ...game, 
    gameState
  }
}

export const cardHiding = (game) => { 
  let {cards} = game; 
  const showingCards = cards.filter((c) => c.cardState === constants.CARD_SHOWN);
  const ids = showingCards.map(c => c.id);

  if (showingCards.length === 2 &&
      showingCards[0].color !== showingCards[1].color) {
      cards = mapCardState(cards, ids, constants.CARD_HIDING);
  }

  return {
    ...game,
    cards
  }
}

export const cardHidden = (game) => {
  let {cards} = game; 
  const cardsForHiding = cards.filter((c) => c.cardState === constants.CARD_HIDING);
  const ids = cardsForHiding.map(c => c.id);
  cards = mapCardState(cards, ids, constants.CARD_HIDDEN);
  
  return {
    ...game,
    cards
  }
}


export const timerTick = (game) => {
  let timer = game.timer - 1;
  let gameState = game.gameState;
  if (timer === 0) {
      gameState = constants.GAME_LOST;
  }
  return {
      ...game, 
      gameState, 
      timer
  }
       
}

export const timerStop = (game) => {
  let gameTimer = game.timer
  if (game.gameState !== constants.GAME_STARTED) {
    clearInterval(timer);
    gameTimer = constants.TOTAL_TIME;
  }
  return {
      ...game, 
      timer: gameTimer
  }
       
}

