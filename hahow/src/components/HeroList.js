import React, { Component, PropTypes } from 'react';

if (!process.env.SERVER) {
  require('./HeroList.css');
}

import HeroCard from './HeroCard';

class HeroList extends Component {
  static propTypes = {
    heroes: PropTypes.arrayOf(PropTypes.shape(HeroCard.propTypes)).isRequired,
  }

  render() {
    const { heroes } = this.props;

    if (heroes.length === 0) {
      return null;
    }

    return (
      <ul className="hero-list">{
        heroes.map(hero => {
          return (
            <li className="hero-list-item" key={ hero.id }>
              <HeroCard { ...hero } />
            </li>
          );
        })
      }</ul>
    );
  }
}

export default HeroList;
