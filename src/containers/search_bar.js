import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
// SearchBar is a container - it needs to be able to modify application state
// by dispatching actions.

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' }

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		console.log(event.target.value);
		this.setState({ term: event.target.value });

	}

	onFormSubmit(event) {
		event.preventDefault(); // when a form element child is focused, pressing enter
														// or submit will automatically tell the browser to
														// submit the contents of the form. it is
														// a normal, non-react behavior, and this line tells
														// the browser to not automatically do so.
		this.props.fetchWeather(this.state.term);
		console.log(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			// the lines inside <input> below make our input form into a 'controlled
			// field', which is form element where the value of the input is set
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

			<form onSubmit={this.onFormSubmit} className='input-group'>

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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}
// this causes the action creator, whenever it creates an action, to have it flow
// through the middleware and to the reducers, and also makes the action
// creator available through props.

export default connect(null, mapDispatchToProps)(SearchBar);
// the connect function takes 2 arguments
// when we export the result of the connect function, mapDispatchToProps is always
// used as the second argument. Previously we used mapDispatchToProps as the first,
// but we don't care about drawing from application state in this component,
// so we use null as the first argument.
