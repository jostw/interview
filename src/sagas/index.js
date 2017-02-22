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

export function fetchHeroProfileApi(id) {
  return fetchApi(`/heroes/${id}/profile`);
}

export function updateHeroProfileApi(id, profile) {
  return fetchApi(`/heroes/${id}/profile`, {
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

export function* fetchHeroProfile({ id }) {
  yield put(actions.requestHeroProfile());
  const profile = yield call(fetchHeroProfileApi, id);
  yield put(actions.receiveHeroProfile(profile));
}

export function* updateHeroProfile({ id, profile }) {
  yield put(actions.patchHeroProfile());
  yield call(updateHeroProfileApi, id, profile);
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
