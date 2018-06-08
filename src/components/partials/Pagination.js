import React, { Component } from "react";
import "../../assets/styles/pagination.css";

class Pagination extends Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(e) {
		let state = {};
		state[this.props.name] = e.target.getAttribute("data-id");
		this.props.onClick(state);
	}

	render() {
		let page = parseInt(this.props.page, 0);
		if (isNaN(page)) {
			page = 1;
		}
		let prev = page - 1;
		let next = page + 1;
		return (
			<div className="pagination">
				<span className="pagination__box" data-id={prev} onClick={ prev !== 0 ? this.onClick : () => ({})}> ← </span>
				<span className="pagination__box" data-id={next} onClick={ this.onClick }> → </span>
			</div>
		);
	}
}

export default Pagination;
