import React, { Component, PropTypes } from 'react';
import './HeroStats.css';

class HeroStats extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number
  }

  render() {
    const { label, value } = this.props;

    return (
      <div className="hero-stats">
        <label className="hero-stats-label" htmlFor={ `hero-stats-${label}` }>{ label.toUpperCase() }</label>
        <a className="hero-stats-increase" href="#" />
        <input id={ `hero-stats-${label}` }
               className="hero-stats-input"
               value={ value || '' }
               type="text" disabled="true" />
        <a className="hero-stats-decrease" href="#" />
      </div>
    );
  }
}

export default HeroStats;
