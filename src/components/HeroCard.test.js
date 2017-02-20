import React from 'react';
import { shallow } from 'enzyme';

import HeroCard from './HeroCard';

it('renders without crashing', () => {
  const hero = {
    id: 'test hero id',
    image: 'test hero image',
    name: 'test hero name'
  };

  const wrapper = shallow(
    <HeroCard { ...hero } />
  );

  expect(wrapper.hasClass('hero-card')).toBe(true);
  expect(wrapper.find('.hero-card-image').length).toBe(1);
  expect(wrapper.find('.hero-card-name').length).toBe(1);
});
