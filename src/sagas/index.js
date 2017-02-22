import { call, put, takeLatest } from 'redux-saga/effects';

import * as actions from '../actions';
import { fetchHeroesApi, fetchHeroProfileApi, updateHeroProfileApi } from '../api';

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
  yield put(actions.refreshHeroProfile());
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
