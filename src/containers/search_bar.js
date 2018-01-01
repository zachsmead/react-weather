// SearchBar is a container - it needs to be able to modify application state
// by dispatching actions.

import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' }
	}

	render() {
		return (
			<form className='input-group'>
			<input
				placeholder='Get a five-day forecast in your favorite cities'
				className='formControl'
				value={this.state.term}
				onChange={this.onInputChange} />
			// the lines above make our input form into a 'controlled field',
			// which is form element where the value of the input is set
			// by the state of our component, not the other way around.
			// so when we click the button below it will draw its input
			// from state.whatever, instead of directly from <input />.
				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>Submit</button>
				</span>
			</form>
		);
	}
}
