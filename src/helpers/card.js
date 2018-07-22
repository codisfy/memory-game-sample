export  const mapCardState = (cards, idsToChange, newCardState) => {
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