import React, { Component, PropTypes } from 'react';
import './HeroStats.css';

class HeroStats extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number,
    remainder: PropTypes.number,
    increaseHeroStats: PropTypes.func,
    decreaseHeroStats: PropTypes.func
  }

  render() {
    const { label, value, remainder,
            increaseHeroStats, decreaseHeroStats } = this.props;

    let heroStatsIncreaseClassList = ['hero-stats-increase'];
    let heroStatsDecreaseClassList = ['hero-stats-decrease'];

    if (remainder === 0) {
      heroStatsIncreaseClassList = [
        ...heroStatsIncreaseClassList,
        'hero-stats-increase-disabled'
      ];
    }

    if (value === 0) {
      heroStatsDecreaseClassList = [
        ...heroStatsDecreaseClassList,
        'hero-stats-decrease-disabled'
      ];
    }

    return (
      <div className="hero-stats">
        <label className="hero-stats-label"
               htmlFor={ `hero-stats-${label}` }>{ label.toUpperCase() }</label>
        <a className={ heroStatsIncreaseClassList.join(' ') } href="#"
           onClick={ increaseHeroStats(label) } />
        <input id={ `hero-stats-${label}` }
               className="hero-stats-input"
               value={ value === null ? '' : value }
               type="text" disabled="true" />
        <a className={ heroStatsDecreaseClassList.join(' ') } href="#"
           onClick={ decreaseHeroStats(label) } />
      </div>
    );
  }
}

export default HeroStats;
