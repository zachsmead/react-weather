// this component is not a container because it doesn't care about application
// state, SearchBar does.

import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';

export default class App extends Component {
  render() {
    return (
      <div>
	      <SearchBar />
      </div>
    );
  }
}
