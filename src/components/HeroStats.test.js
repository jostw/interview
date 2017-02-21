import React from 'react';
import { mount } from 'enzyme';

import HeroStats from './HeroStats';

it('renders without crashing', () => {
  const stats = {
    label: 'test',
    value: Math.floor(Math.random() * 100),
    remainder: Math.floor(Math.random() * 100),
    increaseHeroStats: jest.fn(),
    decreaseHeroStats: jest.fn()
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
  wrapper.find('.hero-stats-increase').simulate('click');
  expect(wrapper.props().increaseHeroStats.mock.calls.length).toBe(1);

  expect(wrapper.find('.hero-stats-decrease').length).toBe(1);
  wrapper.find('.hero-stats-decrease').simulate('click');
  expect(wrapper.props().decreaseHeroStats.mock.calls.length).toBe(1);

  wrapper.setProps({ remainder: 0 });
  expect(wrapper.find('.hero-stats-increase-disabled').length).toBe(1);

  wrapper.setProps({ value: 0 });
  expect(wrapper.find('.hero-stats-decrease-disabled').length).toBe(1);
});
