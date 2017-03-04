import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

class App extends Component {
  render() {
    return (
      <div>Hello World!</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    root: state.root
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
