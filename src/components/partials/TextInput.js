import React, { Component } from "react";

class TextInput extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		var state = {};
		state[this.props.name] = e.target.value;
		this.props.onChange(state);
	}

	render() {
		return (
			<input type="text"
				{... this.props}
				style={{borderRadius: "3px", paddingLeft: "10px", borderStyle:"solid", boxShadow: "none", height: "30px", borderColor: "#f1f1f1", minWidth: "200px"}}
				onChange={ this.onChange } />
		);
	}
}

export default TextInput;
