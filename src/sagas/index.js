import { call, put, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import * as actions from '../actions';

const API_DOMAIN = 'http://hahow-recruit.herokuapp.com';

function fetchApi(api, data = {}) {
  const fetchPromise = fetch(API_DOMAIN + api, data);

  if (data.method === 'PATCH') {
    // Response for `PATCH` is not in json format, return promise directly.
    return fetchPromise;
  }

  return fetchPromise.then(response => response.json());
}

export function fetchHeroesApi() {
  return fetchApi('/heroes');
}

export function fetchHeroProfileApi(heroId) {
  return fetchApi(`/heroes/${heroId}/profile`);
}

export function updateHeroProfileApi(heroId, profile) {
  return fetchApi(`/heroes/${heroId}/profile`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(profile)
  });
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

export function* updateHeroProfile({ heroId, profile }) {
  yield put(actions.patchHeroProfile());
  yield call(updateHeroProfileApi, heroId, profile);
}

function* watchFetchHeroes() {
  yield takeLatest(actions.FETCH_HEROES, fetchHeroes);
}

function* watchFetchHeroProfile() {
  yield takeLatest(actions.FETCH_HERO_PROFILE, fetchHeroProfile);
}

function* watchUpdateHeroProfile() {
  yield takeLatest(actions.UPDATE_HERO_PROFILE, updateHeroProfile);
}

export default function* rootSaga() {
  yield [
    watchFetchHeroes(),
    watchFetchHeroProfile(),
    watchUpdateHeroProfile()
  ];
}
