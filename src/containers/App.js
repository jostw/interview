import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import HeroList from '../components/HeroList';

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchHeroes();
  }

  render() {
    const { hero } = this.props;

    return (
      <div className="container">
        <HeroList heroes={ hero.list } />
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
