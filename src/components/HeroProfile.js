import React, { Component, PropTypes } from 'react';

import './HeroProfile.css';
import HeroStats from './HeroStats';

class HeroProfile extends Component {
  static propTypes = {
    id: PropTypes.string,
    str: PropTypes.number,
    int: PropTypes.number,
    agi: PropTypes.number,
    luk: PropTypes.number,
    remainder: PropTypes.number,
    hasChanged: PropTypes.bool,
    increaseHeroStats: PropTypes.func,
    decreaseHeroStats: PropTypes.func,
    updateHeroProfile: PropTypes.func
  }

  render() {
    const { id, str, int, agi, luk, remainder, hasChanged,
            increaseHeroStats, decreaseHeroStats, updateHeroProfile } = this.props;

    const isHeroProfileSaveDisabled = !hasChanged || remainder > 0;
    let heroProfileSaveClassList = ['hero-profile-save'];

    if (isHeroProfileSaveDisabled) {
      heroProfileSaveClassList = [
        ...heroProfileSaveClassList,
        'hero-profile-save-disabled'
      ];
    }

    return (
      <form className="hero-profile"
            onSubmit={ updateHeroProfile(id, { str, int, agi, luk }) }>
        <ul className="hero-profile-list">
          <li className="hero-profile-stats">
            <HeroStats label="str" value={ str } remainder={ remainder }
                       increaseHeroStats={ increaseHeroStats }
                       decreaseHeroStats={ decreaseHeroStats } />
          </li>
          <li className="hero-profile-stats">
            <HeroStats label="int" value={ int } remainder={ remainder }
                       increaseHeroStats={ increaseHeroStats }
                       decreaseHeroStats={ decreaseHeroStats } />
          </li>
          <li className="hero-profile-stats">
            <HeroStats label="agi" value={ agi } remainder={ remainder }
                       increaseHeroStats={ increaseHeroStats }
                       decreaseHeroStats={ decreaseHeroStats } />
          </li>
          <li className="hero-profile-stats">
            <HeroStats label="luk" value={ luk } remainder={ remainder }
                       increaseHeroStats={ increaseHeroStats }
                       decreaseHeroStats={ decreaseHeroStats } />
          </li>
        </ul>
        <div className="hero-profile-panel">
          <span className="hero-profile-remainder">{ `剩餘點數：${remainder}` }</span>
          <button className={ heroProfileSaveClassList.join(' ') }
                  disabled={ isHeroProfileSaveDisabled }>儲存</button>
        </div>
      </form>
    );
  }
}

export default HeroProfile;
