import React, { Component } from "react";
import "assets/styles/search_placeholder.css";

class SearchPlaceholder extends Component {
	item(i) {
		return (
			<li className="flex-grid" key={i}>
				<div className="col-1"></div>
				<div className="col-2">
					<div className="search-result__title"></div>
					<div className="search-result__subcontent">
						<span className="label"></span>
						<span className="label"></span>
						<br/>
						<time></time>
					</div>
				</div>
			</li>);
	}
	render() {
		let render = this.props.render;
		let component = "";
		if (render === true) {
			component = <ul className="placeholder search-result">
				{[1,2,3,4].map(this.item)}
			</ul>;
		}
		return <React.Fragment> {component} </React.Fragment>;
	}
}

export default SearchPlaceholder;
