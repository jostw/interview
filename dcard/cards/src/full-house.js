import counter from './core/counter';

// Check if deck is full house.
export function checkFullHouse(deck) {
  const cardCounter = counter(deck);

  // Return if there are more than 2 kinds of rank.
  if (cardCounter.length > 2) {
    return false;
  }

  return cardCounter.pluck('count').ascendingSort().join('') === '23';
}

/**
 * Cheating functions
 */

// Modify a deck into full house.
export function modifyDeckWithFullHouse(deck) {
  const sortedDeck = deck.pluck('rank').ascendingSort();

  return deck.map((card, index) => ({
    ...card,
    rank: sortedDeck[index < 3 ? 0 : 3]
  }));
}
