import React, { Component, PropTypes } from 'react';

import './HeroProfile.css';
import HeroStats from './HeroStats';

class HeroProfile extends Component {
  static propTypes = {
    str: PropTypes.number,
    int: PropTypes.number,
    agi: PropTypes.number,
    luk: PropTypes.number,
    remainder: PropTypes.number,
    increaseHeroStats: PropTypes.func,
    decreaseHeroStats: PropTypes.func
  }

  render() {
    const { str, int, agi, luk, remainder,
            increaseHeroStats, decreaseHeroStats } = this.props;

    return (
      <form className="hero-profile">
        <ul className="hero-profile-list">
          <li className="hero-profile-stats">
            <HeroStats label="str" value={ str }
                       increaseHeroStats={ increaseHeroStats }
                       decreaseHeroStats={ decreaseHeroStats } />
          </li>
          <li className="hero-profile-stats">
            <HeroStats label="int" value={ int }
                       increaseHeroStats={ increaseHeroStats }
                       decreaseHeroStats={ decreaseHeroStats } />
          </li>
          <li className="hero-profile-stats">
            <HeroStats label="agi" value={ agi }
                       increaseHeroStats={ increaseHeroStats }
                       decreaseHeroStats={ decreaseHeroStats } />
          </li>
          <li className="hero-profile-stats">
            <HeroStats label="luk" value={ luk }
                       increaseHeroStats={ increaseHeroStats }
                       decreaseHeroStats={ decreaseHeroStats } />
          </li>
        </ul>
        <div className="hero-profile-panel">
          <span className="hero-profile-remainder">{ `剩餘點數：${remainder}` }</span>
          <button className="hero-profile-save">儲存</button>
        </div>
      </form>
    );
  }
}

export default HeroProfile;
