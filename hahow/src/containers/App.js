import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import HeroList from '../components/HeroList';
import HeroProfile from '../components/HeroProfile';

class App extends Component {
  static propTypes = {
    hero: PropTypes.shape({
      list: HeroList.propTypes.heroes.isRequired,
      profile: PropTypes.shape(HeroProfile.propTypes).isRequired
    }).isRequired
  }

  static childContextTypes = {
    i18n: PropTypes.object
  }

  constructor(props) {
    super(props);

    this.increaseHeroStats = this.increaseHeroStats.bind(this);
    this.decreaseHeroStats = this.decreaseHeroStats.bind(this);
    this.updateHeroProfile = this.updateHeroProfile.bind(this);
  }

  getChildContext() {
    return { i18n: this.props.i18n };
  }

  componentWillMount() {
    if (!process.env.SERVER && window.__PRELOADED_STATE__) {
      // Allow the passed state to be garbage-collected.
      delete window.__PRELOADED_STATE__;
      return;
    }

    // When preloadedState is unaccessable, grab data from server.
    const { params, actions } = this.props;

    actions.fetchHeroes();

    if (params.heroId) {
      actions.fetchHeroProfile(params.heroId);
    }

    actions.fetchI18n();
  }

  componentWillUpdate(nextProps) {
    const { params } = nextProps;

    // Don't re-fetch with same hero id.
    if (params.heroId && params.heroId !== this.props.params.heroId) {
      this.props.actions.fetchHeroProfile(params.heroId);
    }
  }

  render() {
    const { params, hero } = this.props;
    let profile = null;

    if (hero.list.length > 0 && this.props.children) {
      profile = React.cloneElement(this.props.children, {
        id: params.heroId,
        ...hero.profile,
        increaseHeroStats: this.increaseHeroStats,
        decreaseHeroStats: this.decreaseHeroStats,
        updateHeroProfile: this.updateHeroProfile
      });
    }

    return (
      <div className="container">
        <HeroList heroes={ hero.list } />
        { profile }
      </div>
    );
  }

  increaseHeroStats(label) {
    return e => {
      e.preventDefault();
      this.props.actions.increaseHeroStats(label);
    };
  }

  decreaseHeroStats(label) {
    return e => {
      e.preventDefault();
      this.props.actions.decreaseHeroStats(label);
    };
  }

  updateHeroProfile(id, profile) {
    return e => {
      e.preventDefault();
      this.props.actions.updateHeroProfile(id, profile);
    };
  }
}

function mapStateToProps(state) {
  return {
    hero: state.hero,
    i18n: state.i18n
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
