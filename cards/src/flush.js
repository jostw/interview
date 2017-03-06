import { suits } from './core/cards';

// Check if deck is flush.
export function checkFlush(deck) {
  return !!deck.pluck('suit').reduce((a, b) => a === b ? a : NaN);
}

/**
 * Cheating functions
 */

// Modify a deck into flush.
export function modifyDeckWithFlush(deck) {
  const flushSuit = suits[Math.floor(Math.random() * 4)];

  return deck.map(card => ({
    ...card,
    suit: flushSuit
  }));
}
