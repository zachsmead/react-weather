// SearchBar is a container - it needs to be able to modify application state
// by dispatching actions.

import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' }

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		console.log(event.target.value);
		this.setState({ term: event.target.value });
	}

	render() {
		return (
			// the lines below make our input form into a 'controlled field',
			// which is form element where the value of the input is set
			// by the state of our component, not the other way around.
			// so when we click the button below it will draw its input
			// from state.whatever, instead of directly from <input />.

			// the line onChange = {this.onInputChange} uses a callback function,
			// where the 'this' does not refer to the React component that
			// we are trying to affect. so in this example it means that 'this.setState'
			// inside of onInputChange will not give us back the searchBar component,
			// therefore we will get the error 'cannot read property setState of
			// undefined.' So if we are passing around a callback function that has a
			// reference to 'this', we have to bind the callback to the proper context.

			<form className='input-group'>

			<input
				placeholder='Get a five-day forecast in your favorite cities'
				className='form-control'
				value={this.state.term}
				onChange={this.onInputChange} />

				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>Submit</button>
				</span>
			</form>
		);
	}
}
