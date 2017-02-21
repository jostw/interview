import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import HeroList from '../components/HeroList';

class App extends Component {
  componentWillMount() {
    const { params, actions } = this.props;

    actions.fetchHeroes();

    if (params.heroId) {
      actions.fetchHeroProfile(params.heroId);
    }
  }

  componentWillUpdate(nextProps) {
    const { params } = nextProps;

    if (params.heroId && params.heroId !== this.props.params.heroId) {
      this.props.actions.fetchHeroProfile(params.heroId);
    }
  }

  render() {
    const { hero } = this.props;
    let profile = null;

    if (hero.list.length > 0 && this.props.children) {
      profile = React.cloneElement(this.props.children, hero.profile);
    }

    return (
      <div className="container">
        <HeroList heroes={ hero.list } />
        { profile }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { hero: state.hero };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
