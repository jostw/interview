import { call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import * as actions from '../actions';

const API_DOMAIN = 'http://hahow-recruit.herokuapp.com';

function fetchApi(api) {
  return fetch(API_DOMAIN + api).then(response => response.json());
}

export function fetchHeroesApi() {
  return fetchApi('/heroes');
}

export function fetchHeroProfileApi(heroId) {
  return fetchApi(`/heroes/${heroId}/profile`);
}

export function* fetchHeroes() {
  yield put(actions.requestHeroes());
  const heroes = yield call(fetchHeroesApi);
  yield put(actions.receiveHeroes(heroes));
}

export function* fetchHeroProfile({ heroId }) {
  yield put(actions.requestHeroProfile());
  const profile = yield call(fetchHeroProfileApi, heroId);
  yield put(actions.receiveHeroProfile(profile));
}

export default function* rootSaga() {
  yield takeEvery(actions.FETCH_HEROES, fetchHeroes);
  yield takeEvery(actions.FETCH_HERO_PROFILE, fetchHeroProfile);
};
