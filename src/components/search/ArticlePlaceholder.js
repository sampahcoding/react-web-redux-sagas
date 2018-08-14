import React, { Component } from "react";
import "assets/styles/article_placeholder.css";

class SearchPlaceholder extends Component {
	render() {
		let render = this.props.render;
		let component = "";
		if (render === true) {
			component =
			<div className="placeholder">
				<div className="h2"></div>
				<div className="h2 --short"></div>
				<div className="gap">
					<div className="p"></div>
					<div className="p"></div>
					<div className="p"></div>
					<div className="p"></div>
					<div className="p--short"></div>
				</div>
				<div className="gap">
					<div className="p"></div>
					<div className="p"></div>
					<div className="p--short"></div>
				</div>
				<div className="detail__footer">
					<div className="detail__footer__img" align="top"></div>
					<div className="detail__footer__left">
						<span className="label"></span>
						<span className="label"></span>
						<br/>
						<time></time>
					</div>
				</div>
			</div>;
		}
		return <React.Fragment> {component} </React.Fragment>;
	}
}

export default SearchPlaceholder;
