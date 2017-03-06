import { dealCards } from './core/cards';
import { checkFourOfAKind, modifyDeckWithFourOfAKind } from './four-of-a-kind';
import { checkFullHouse, modifyDeckWithFullHouse } from './full-house';
import { checkFlush, modifyDeckWithFlush } from './flush';
import { checkStraight, modifyDeckWithStraight } from './straight';

let deck1 = dealCards();
let deck2 = dealCards(deck1);

// deck1 = modifyDeckWithFourOfAKind(deck1);
// deck1 = modifyDeckWithFullHouse(deck1);
// deck1 = modifyDeckWithFlush(deck1);
// deck1 = modifyDeckWithStraight(deck1);

// deck2 = modifyDeckWithFourOfAKind(deck2);
// deck2 = modifyDeckWithFullHouse(deck2);
// deck2 = modifyDeckWithFlush(deck2);
// deck2 = modifyDeckWithStraight(deck2);

console.log('Deck 1:', deck1);
console.log('Deck 2:', deck2);

/**
 * Ranking of hands:
 *   - Four of a kind: 4
 *   - Full house: 3
 *   - Flush: 2
 *   - Straight: 1
 *   - Unmatched: 0
 */
const hand1 = checkFourOfAKind(deck1) ? 4 :
              checkFullHouse(deck1) ? 3 :
              checkFlush(deck1) ? 2 :
              checkStraight(deck1) ? 1 : 0;

const hand2 = checkFourOfAKind(deck2) ? 4 :
              checkFullHouse(deck2) ? 3 :
              checkFlush(deck2) ? 2 :
              checkStraight(deck2) ? 1 : 0;

if (hand1 > hand2) {
  console.log('Deck 1 has the better hand.');
} else if (hand2 > hand1) {
  console.log('Deck 2 has the better hand.');
} else {
  console.log('Draw.');
}
