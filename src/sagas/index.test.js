import { call, put } from 'redux-saga/effects';

import * as actions from '../actions';
import { fetchHeroes, fetchHeroProfile, updateHeroProfile,
         fetchHeroesApi, fetchHeroProfileApi, updateHeroProfileApi } from './index';

it('fetch heroes', () => {
  const generator = fetchHeroes();

  let next = generator.next();
  expect(next.value).toEqual(put(actions.requestHeroes()));

  next = generator.next();
  expect(next.value).toEqual(call(fetchHeroesApi));

  next = generator.next();
  expect(next.value).toEqual(put(actions.receiveHeroes()));
});

it('fetch hero profile', () => {
  const id = 'test id';
  const generator = fetchHeroProfile({ id });

  let next = generator.next();
  expect(next.value).toEqual(put(actions.requestHeroProfile()));

  next = generator.next();
  expect(next.value).toEqual(call(fetchHeroProfileApi, id));

  next = generator.next();
  expect(next.value).toEqual(put(actions.receiveHeroProfile()));
});

it('update hero profile', () => {
  const id = 'test id';
  const profile = {};
  const generator = updateHeroProfile({ id, profile });

  let next = generator.next();
  expect(next.value).toEqual(put(actions.patchHeroProfile()));

  next = generator.next();
  expect(next.value).toEqual(call(updateHeroProfileApi, id, profile));
});
