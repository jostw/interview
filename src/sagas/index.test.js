import { call, put } from 'redux-saga/effects';

import { fetchHeroes, fetchHeroesApi } from './index';
import * as actions from '../actions'

it('fetch heroes', () => {
  const generator = fetchHeroes();

  let next = generator.next();
  expect(next.value).toEqual(put(actions.requestHeroes()));

  next = generator.next();
  expect(next.value).toEqual(call(fetchHeroesApi));

  next = generator.next();
  expect(next.value).toEqual(put(actions.receiveHeroes()));
});
