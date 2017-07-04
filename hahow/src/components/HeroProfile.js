import React, { Component, PropTypes } from 'react';

if (!process.env.SERVER) {
  require('./HeroProfile.css');
}

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

  static contextTypes = {
    i18n: PropTypes.object
  }

  render() {
    const { id, str, int, agi, luk, remainder, hasChanged,
            increaseHeroStats, decreaseHeroStats, updateHeroProfile } = this.props;
    const { i18n } = this.context;

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
            <HeroStats label={ i18n.HERO_STATS_STR } value={ str } remainder={ remainder }
                       increaseHeroStats={ increaseHeroStats }
                       decreaseHeroStats={ decreaseHeroStats } />
          </li>
          <li className="hero-profile-stats">
            <HeroStats label={ i18n.HERO_STATS_INT } value={ int } remainder={ remainder }
                       increaseHeroStats={ increaseHeroStats }
                       decreaseHeroStats={ decreaseHeroStats } />
          </li>
          <li className="hero-profile-stats">
            <HeroStats label={ i18n.HERO_STATS_AGI } value={ agi } remainder={ remainder }
                       increaseHeroStats={ increaseHeroStats }
                       decreaseHeroStats={ decreaseHeroStats } />
          </li>
          <li className="hero-profile-stats">
            <HeroStats label={ i18n.HERO_STATS_LUK } value={ luk } remainder={ remainder }
                       increaseHeroStats={ increaseHeroStats }
                       decreaseHeroStats={ decreaseHeroStats } />
          </li>
        </ul>
        <div className="hero-profile-panel">
          <span className="hero-profile-remainder">{
            `${i18n.HERO_PROFILE_REMAINDER + i18n.COLON + (remainder || 0)}`
          }</span>
          <button className={ heroProfileSaveClassList.join(' ') }
                  disabled={ isHeroProfileSaveDisabled }>{ i18n.HERO_PROFILE_SAVE }</button>
        </div>
      </form>
    );
  }
}

export default HeroProfile;
