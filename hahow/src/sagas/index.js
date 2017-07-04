import { call, put, takeLatest } from 'redux-saga/effects';

import * as actions from '../actions';
import { fetchHeroesApi, fetchHeroProfileApi, updateHeroProfileApi,
         fetchI18nApi } from '../api';

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

export function* fetchI18n() {
  yield put(actions.requestI18n());
  const i18n = yield call(fetchI18nApi);
  yield put(actions.receiveI18n(i18n));
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

function* watchFetchI18n() {
  yield takeLatest(actions.FETCH_I18N, fetchI18n);
}

export default function* rootSaga() {
  yield [
    watchFetchHeroes(),
    watchFetchHeroProfile(),
    watchUpdateHeroProfile(),
    watchFetchI18n()
  ];
}
