import { dealCards } from './core/cards';
import { checkFullHouse } from './full-house';
import { checkFlush } from './flush';
import { checkStraight } from './straight';

const deck1 = dealCards();
const deck2 = dealCards(deck1);

console.log('Deck 1:', deck1);
console.log('Deck 2:', deck2);

/**
 * Ranking of hands:
 * - Full house: 3
 * - Flush: 2
 * - Straight: 1
 * - Unmatched: 0
 */
const hand1 = checkFullHouse(deck1) ? 3 :
              checkFlush(deck1) ? 2 :
              checkStraight(deck1) ? 1 : 0;

const hand2 = checkFullHouse(deck2) ? 3 :
              checkFlush(deck2) ? 2 :
              checkStraight(deck2) ? 1 : 0;

if (hand1 > hand2) {
  console.log('Deck 1 has the better hand.');
} else if (hand2 > hand1) {
  console.log('Deck 2 has the better hand.');
} else {
  console.log('Draw.');
}
