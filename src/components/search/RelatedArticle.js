import React, { Component } from "react";
import "assets/styles/related_articles.css";
import { Link } from "react-router-dom";

class RelatedArticle extends Component {
	item(data) {
		return (
			<li key={data.id}>
				<Link to={"/article/" + data.id}>
					<img src={"https://picsum.photos/200/100/?image="+ data.id} align="top" alt={data.title}/>
					<h5>{data.title}</h5>
				</Link>
			</li>);
	}

	render() {
		let datas = this.props.datas;
		return <ul className="flex-3">
			{datas.map(this.item)}
		</ul>;
	}
}

export default RelatedArticle;
