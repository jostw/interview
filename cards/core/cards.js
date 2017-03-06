Array.prototype.ascendingSort = function() {
  return this.sort((a, b) => a - b);
};

export const suits = ['♣️', '♦️', '♥️', '♠️'];

// Deal cards which will not pick same cards from previous deck.
export function dealCards(previousDeck = []) {
  const deck = [];

  // Reverse previous deck.
  previousDeck = previousDeck.map(card => (card.rank - 1) + suits.indexOf(card.suit) * 13);

  while (deck.length < 5) {
    const card = Math.floor(Math.random() * 52);

    // Check if card already exists in current deck or previous deck.
    if (!deck.includes(card) && !previousDeck.includes(card)) {
      deck.push(card);
    }
  }

  // Format deck into poker cards.
  return deck.ascendingSort().map((card, index) => {
    return {
      suit: suits[Math.floor(card / 13)],
      rank: card % 13 + 1
    };
  });
}
