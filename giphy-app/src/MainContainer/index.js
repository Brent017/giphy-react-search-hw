import React, { Component } from 'react';
import ButtonExampleAnimated from './ButtonAnimated';

class SearchBar extends Component {
	constructor(){
		super();

		this.state = {
			giph: ''
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.search(this.state.giph)
	}

	handleChange = (e) => {
		e.preventDefault();
		console.log('giph: ', this.state.giph);
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

	render(){
		return(
				<form onSubmit={this.handleSubmit}>
					<input type='text' name='giph' placeholder='search' value={this.state.giph} onChange={this.handleChange} />
					<input type='submit' value='Submit' />
			    	<div>
  <button class="ui animated button">
    <div class="visible content">Submit</div>
    <div class="hidden content"><i aria-hidden="true" class="arrow right icon"></i></div>
  </button>
</div>
				</form>
			)
	}
}

export default SearchBar;