import React, { Component } from "react";

class Sorting extends Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(e) {
		let state = {};
		state[this.props.name] = e.target.getAttribute("data-name");
		this.props.onClick(state);
	}

	render() {
		return (
			<span className={this.props.style} data-name={this.props.sortby} onClick={ this.onClick }>{ this.props.title }</span>
		);
	}
}

export default Sorting;
