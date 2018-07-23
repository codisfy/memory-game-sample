import { constants } from "../constants";

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

  if (game.noClick || data.cardState === constants.CARD_SHOWN || data.cardState === constants.CARD_MATCHING) {
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
  
  let noClick = false
  if (showingCards.length === 2 &&
      showingCards[0].color !== showingCards[1].color) {
      cards = mapCardState(cards, ids, constants.CARD_HIDING);
      noClick = true
  }

  return {
    ...game,
    cards, 
    noClick
  }
}

export const cardHidden = (game) => {
  let {cards} = game; 
  const cardsForHiding = cards.filter((c) => c.cardState === constants.CARD_HIDING);
  const ids = cardsForHiding.map(c => c.id);
  cards = mapCardState(cards, ids, constants.CARD_HIDDEN);
  
  return {
    ...game,
    cards,
    noClick:false
  }
}


