import counter from './core/counter';

// Check if deck is four of a kind.
export function checkFourOfAKind(deck) {
  const cardCounter = counter(deck);

  // Return if there are more than 2 kinds of rank.
  if (cardCounter.length > 2) {
    return false;
  }

  return cardCounter.pluck('count').ascendingSort().join('') === '14';
}

/**
 * Cheating functions
 */

// Modify a deck into four of a kind.
export function modifyDeckWithFourOfAKind(deck) {
  const sortedDeck = deck.pluck('rank').ascendingSort();

  return deck.map((card, index) => ({
    ...card,
    rank: sortedDeck[index < 4 ? 0 : 3]
  }));
}
