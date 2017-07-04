import React from 'react';
import { shallow } from 'enzyme';

import HeroList from './HeroList';

it('renders without crashing', () => {
  const heroes = [];

  const wrapper = shallow(
    <HeroList heroes={ heroes } />
  );

  expect(wrapper.html()).toBe(null);
});

it('renders heroes', () => {
  const heroes = [
    {
      id: 'test hero id',
      image: 'test hero image',
      name: 'test hero name'
    }
  ];

  const wrapper = shallow(
    <HeroList heroes={ heroes } />
  );

  expect(wrapper.hasClass('hero-list')).toBe(true);
  expect(wrapper.find('.hero-list-item').length).toBe(1);
});
