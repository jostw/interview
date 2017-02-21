import React from 'react';
import { shallow, mount } from 'enzyme';

import HeroStats from './HeroStats';

it('renders without crashing', () => {
  const stats = createMockStats();

  const wrapper = mount(
    <HeroStats { ...stats } />
  );

  expect(wrapper.hasClass('hero-stats')).toBe(true);
  expect(wrapper.find('.hero-stats-label').length).toBe(1);
  expect(wrapper.find('.hero-stats-label').text()).toBe(stats.label.toUpperCase());
  expect(wrapper.find('.hero-stats-input').length).toBe(1);
  expect(wrapper.find('.hero-stats-input').getNode().value).toBe(`${stats.value}`);
});

it('increase and decrease hero stats', () => {
  const stats = createMockStats();

  const wrapper = mount(
    <HeroStats { ...stats } />
  );

  expect(wrapper.find('.hero-stats-increase').length).toBe(1);
  wrapper.find('.hero-stats-increase').simulate('click');
  expect(wrapper.props().increaseHeroStats.mock.calls.length).toBe(1);

  expect(wrapper.find('.hero-stats-decrease').length).toBe(1);
  wrapper.find('.hero-stats-decrease').simulate('click');
  expect(wrapper.props().decreaseHeroStats.mock.calls.length).toBe(1);
});

it('disabled when specified value is 0', () => {
  const stats = createMockStats();

  const wrapper = shallow(
    <HeroStats { ...stats } />
  );

  wrapper.setProps({ remainder: 0 });
  expect(wrapper.find('.hero-stats-increase-disabled').length).toBe(1);

  wrapper.setProps({ value: 0 });
  expect(wrapper.find('.hero-stats-decrease-disabled').length).toBe(1);
});

function createMockStats() {
  return {
    label: 'test',
    value: Math.floor(Math.random() * 100),
    remainder: Math.floor(Math.random() * 100),
    increaseHeroStats: jest.fn(),
    decreaseHeroStats: jest.fn()
  };
}
