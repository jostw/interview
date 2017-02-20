import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import './HeroCard.css';

class HeroCard extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    const { id, image, name } = this.props;

    return (
      <Link className="hero-card"
            activeClassName="hero-card-selected"
            to={ `/heroes/${id}` }
            title={ name }>
        <img className="hero-card-image" src={ image } alt={ name } title={ name } />
        <span className="hero-card-name">{ name }</span>
      </Link>
    );
  }
}

export default HeroCard;
