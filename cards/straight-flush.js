import { checkFlush, modifyDeckWithFlush } from './flush';
import { checkStraight, modifyDeckWithStraight } from './straight';

// Check if deck is straight flush.
export function checkStraightFlush(deck) {
  return checkStraight(deck) && checkFlush(deck);
}

/**
 * Cheating functions
 */

// Modify a deck into straight flush
export function modifyDeckWithStraightFlush(deck) {
  deck = modifyDeckWithFlush(deck);
  deck = modifyDeckWithStraight(deck);

  return deck;
}
