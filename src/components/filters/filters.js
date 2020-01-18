import React, { Component } from "react";
import "./filters.css";



export default class Filters extends Component {
	render() {
		return (
			<div className="filters">
				<button type="button" className="btn btn-info">All</button>
				<button type="button" className="btn btn-outline-secondary">Active</button>
				<button type="button" className="btn btn-outline-secondary">Done</button>
			</div>
		);
	}
}

