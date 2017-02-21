import React from 'react';
import { mount } from 'enzyme';

import HeroStats from './HeroStats';

it('renders without crashing', () => {
  const stats = {
    label: 'test',
    value: Math.floor(Math.random() * 100)
  };

  const wrapper = mount(
    <HeroStats { ...stats } />
  );

  expect(wrapper.hasClass('hero-stats')).toBe(true);
  expect(wrapper.find('.hero-stats-label').length).toBe(1);
  expect(wrapper.find('.hero-stats-label').text()).toBe(stats.label.toUpperCase());
  expect(wrapper.find('.hero-stats-input').length).toBe(1);
  expect(wrapper.find('.hero-stats-input').getNode().value).toBe(`${stats.value}`);
  expect(wrapper.find('.hero-stats-increase').length).toBe(1);
  expect(wrapper.find('.hero-stats-decrease').length).toBe(1);
});
