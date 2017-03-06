// Check if deck is straight.
export function checkStraight(deck) {
  return !!deck.pluck('rank').reduce((a, b) => a + 1 === b ? b : NaN);
}

/**
 * Cheating functions
 */

// Modify a deck into straight.
export function modifyDeckWithStraight(deck) {
  let rank = deck[0].rank;

  if (rank > 9) {
    rank = 9;
  }

  return deck.map(card => ({
    ...card,
    rank: rank++
  }));
}
