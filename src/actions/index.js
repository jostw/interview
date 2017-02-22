export const FETCH_HEROES = 'FETCH_HEROES';
export const REQUEST_HEROES = 'REQUEST_HEROES';
export const RECEIVE_HEROES = 'RECEIVE_HEROES';

export const fetchHeroes = () => ({ type: FETCH_HEROES });
export const requestHeroes = () => ({ type: REQUEST_HEROES });
export const receiveHeroes = heroes => ({ type: RECEIVE_HEROES, heroes });

export const FETCH_HERO_PROFILE = 'FETCH_HERO_PROFILE';
export const REQUEST_HERO_PROFILE = 'REQUEST_HERO_PROFILE';
export const RECEIVE_HERO_PROFILE = 'RECEIVE_HERO_PROFILE';

export const fetchHeroProfile = id => ({ type: FETCH_HERO_PROFILE, id });
export const requestHeroProfile = () => ({ type: REQUEST_HERO_PROFILE });
export const receiveHeroProfile = profile => ({ type: RECEIVE_HERO_PROFILE, profile });

export const INCREASE_HERO_STATS = 'INCREASE_HERO_STATS';
export const DECREASE_HERO_STATS = 'DECREASE_HERO_STATS';

export const increaseHeroStats = label => ({ type: INCREASE_HERO_STATS, label });
export const decreaseHeroStats = label => ({ type: DECREASE_HERO_STATS, label });

export const UPDATE_HERO_PROFILE = 'UPDATE_HERO_PROFILE';
export const PATCH_HERO_PROFILE = 'PATCH_HERO_PROFILE';
export const REFRESH_HERO_PROFILE = 'REFRESH_HERO_PROFILE';

export const updateHeroProfile = (id, profile) => ({ type: UPDATE_HERO_PROFILE, id, profile });
export const patchHeroProfile = () => ({ type: PATCH_HERO_PROFILE });
export const refreshHeroProfile = () => ({ type: REFRESH_HERO_PROFILE });
