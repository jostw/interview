import React from 'react';
import { mount } from 'enzyme';

import HeroProfile from './HeroProfile';

it('renders without crashing', () => {
  const profile = {
    str: Math.floor(Math.random() * 100),
    int: Math.floor(Math.random() * 100),
    agi: Math.floor(Math.random() * 100),
    luk: Math.floor(Math.random() * 100),
    remainder: Math.floor(Math.random() * 100),
    increaseHeroStats: jest.fn(),
    decreaseHeroStats: jest.fn(),
    updateHeroProfile: jest.fn()
  };

  const wrapper = mount(
    <HeroProfile { ...profile } />
  );

  expect(wrapper.hasClass('hero-profile')).toBe(true);
  expect(wrapper.find('.hero-profile-stats').length).toBe(4);
  expect(wrapper.find('.hero-profile-panel').length).toBe(1);
  expect(wrapper.find('.hero-profile-remainder').length).toBe(1);
  expect(wrapper.find('.hero-profile-remainder').text()).toBe(`剩餘點數：${profile.remainder}`);
  expect(wrapper.find('.hero-profile-save').length).toBe(1);
  wrapper.find('.hero-profile-save').simulate('click');
  expect(wrapper.props().updateHeroProfile.mock.calls.length).toBe(1);
});