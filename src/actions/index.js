export const FETCH_HEROES = 'FETCH_HEROES';
export const REQUEST_HEROES = 'REQUEST_HEROES';
export const RECEIVE_HEROES = 'RECEIVE_HEROES';

export const fetchHeroes = () => ({ type: FETCH_HEROES });
export const requestHeroes = () => ({ type: REQUEST_HEROES });
export const receiveHeroes = heroes => ({ type: RECEIVE_HEROES, heroes });
