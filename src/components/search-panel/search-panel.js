import React, { Component } from "react";

export default class SearchPanel extends Component {


	state = {
		filterValue: ''
	}

	onFilterChange = (e) => {
		this.setState({
			filterValue: e.target.value
		})
		this.props.updateTerm(e.target.value);
	}

	render() {
		const { filterValue } = this.state;
		return (
			<input 
			type="text" 
			className="search-panel form-control" 
			placeholder="Filter Todo List" 
			onChange={ this.onFilterChange }
			value={ filterValue } />
		);
	}

};