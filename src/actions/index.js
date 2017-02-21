export const FETCH_HEROES = 'FETCH_HEROES';
export const REQUEST_HEROES = 'REQUEST_HEROES';
export const RECEIVE_HEROES = 'RECEIVE_HEROES';

export const fetchHeroes = () => ({ type: FETCH_HEROES });
export const requestHeroes = () => ({ type: REQUEST_HEROES });
export const receiveHeroes = heroes => ({ type: RECEIVE_HEROES, heroes });

export const FETCH_HERO_PROFILE = 'FETCH_HERO_PROFILE';
export const REQUEST_HERO_PROFILE = 'REQUEST_HERO_PROFILE';
export const RECEIVE_HERO_PROFILE = 'RECEIVE_HERO_PROFILE';

export const fetchHeroProfile = heroId => ({ type: FETCH_HERO_PROFILE, heroId });
export const requestHeroProfile = () => ({ type: REQUEST_HERO_PROFILE });
export const receiveHeroProfile = profile => ({ type: RECEIVE_HERO_PROFILE, profile });
