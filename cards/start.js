import { dealCards } from './core/cards';

const deck1 = dealCards();
const deck2 = dealCards(deck1);

console.log(deck1);
console.log(deck2);
