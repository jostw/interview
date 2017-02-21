import React, { Component, PropTypes } from 'react';
import './HeroStats.css';

class HeroStats extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number,
    increaseHeroStats: PropTypes.func,
    decreaseHeroStats: PropTypes.func
  }

  render() {
    const { label, value, increaseHeroStats, decreaseHeroStats } = this.props;

    return (
      <div className="hero-stats">
        <label className="hero-stats-label"
               htmlFor={ `hero-stats-${label}` }>{ label.toUpperCase() }</label>
        <a className="hero-stats-increase" href="#"
           onClick={ increaseHeroStats(label) } />
        <input id={ `hero-stats-${label}` }
               className="hero-stats-input"
               value={ value === null ? '' : value }
               type="text" disabled="true" />
        <a className="hero-stats-decrease" href="#"
           onClick={ decreaseHeroStats(label) } />
      </div>
    );
  }
}

export default HeroStats;
