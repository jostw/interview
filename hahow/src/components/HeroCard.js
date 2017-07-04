import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

if (!process.env.SERVER) {
  require('./HeroCard.css');
}

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
        <div className="hero-card-image">
          <img src={ image } alt={ name } title={ name } />
        </div>
        <span className="hero-card-name">{ name }</span>
      </Link>
    );
  }
}

export default HeroCard;
