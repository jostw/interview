import { call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import * as actions from '../actions';

export function fetchHeroesApi() {
  return fetch('http://hahow-recruit.herokuapp.com/heroes')
    .then(response => response.json());
}

export function* fetchHeroes() {
  yield put(actions.requestHeroes());
  const heroes = yield call(fetchHeroesApi);
  yield put(actions.receiveHeroes(heroes));
}

export default function* rootSaga() {
  yield takeEvery(actions.FETCH_HEROES, fetchHeroes);
};
