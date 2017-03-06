import { dealCards } from './core/cards';
import { checkStraight } from './straight';

const deck1 = dealCards();
const deck2 = dealCards(deck1);

console.log('Deck 1:', deck1);
console.log('Deck 2:', deck2);

const hand1 = checkStraight(deck1) ? 1 : 0;
const hand2 = checkStraight(deck2) ? 1 : 0;

if (hand1 > hand2) {
  console.log('Deck 1 has the better hand.');
} else if (hand2 > hand1) {
  console.log('Deck 2 has the better hand.');
} else {
  console.log('Draw.');
}
