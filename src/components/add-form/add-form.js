import React, { Component } from 'react';
import './add-form.css';

export default class AddForm extends Component {


	state = {
		label: ''
	}

	onLabelChange= (e) => {
		this.setState({
			label: e.target.value
		});
	};

	onSubmit= (e) => {
		e.preventDefault();
		this.props.onAdd( this.state.label );
		this.setState({
			label: ''
		});
	};

	render() {
		return (
			<form className="add-form"
			onSubmit= { this.onSubmit }>
				<input 
					type="text"
					value={ this.state.label }
				 className="form-control" 
				 placeholder="Enter New Todo"
				 onChange={ this.onLabelChange }
				 />
				<input type="submit" 
				className="btn btn-primary"
					value="Add Todo" />
			</form>
		)
	};
};