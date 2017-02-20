import React, { Component, PropTypes } from 'react';
import './HeroCard.css';

class HeroCard extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    const { image, name } = this.props;

    return (
      <div className="hero-card">
        <img className="hero-card-image" src={ image } alt={ name } title={ name } />
        <span className="hero-card-name">{ name }</span>
      </div>
    );
  }
}

export default HeroCard;
