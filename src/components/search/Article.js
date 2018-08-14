import React, { Component } from "react";
import { connect } from "react-redux";
import { getArticle } from "reducers/ArticleReducer";
import {debounce} from "lodash";
import Placeholder from "components/search/ArticlePlaceholder";
import RelatedArticle from "components/search/RelatedArticle";
import Reload from "components/partials/Reload";
import "assets/styles/article.css";

class Article extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.id
		};
		this.requestData = debounce(this.requestData,1000);
	}

	componentDidMount() {
		this.props.getArticle(this.state.id);
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.id !== prevProps.match.params.id) {
			this.requestData();
		}
	}

	requestData() {
		this.setState({id: this.props.match.params.id});
		this.props.getArticle(this.state.id);
	}

	render() {
		let data = this.props.data;
		let id = this.state.id;
		var content = "";
		if (data.id) {
			content = <div key={data.id}>
				<h2 className="tdd-title"> { data.title } </h2>
				<p>{data.body}</p>
				<div className="detail__footer">
					<img src={"https://picsum.photos/50/50/?image="+ data.id} align="top" alt={data.title}/>
					<div className="detail__footer__left">
						<span className="label">expedita</span>
						<span className="label">consequuntur</span>
						<br/>
						<time>4 days ago</time>
					</div>
				</div>
				<RelatedArticle datas={this.props.related}/>
			</div>;
		}
		let empty;
		if (this.props.reload === true) {
			empty =
				<div className="no-result">
					<Reload doReload={this.requestData.bind(this)}/>
				</div>;
		} else if (this.props.no_result === true) {
			empty =
				<div className="no-result">
					<div>No Result for { id }</div>
				</div>;
		}

		return (
			<div className="detail">
				<Placeholder render={this.props.progress} />
				{ empty }
				{ content }
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state.article;
};

const mapDispatchToProps = {
	getArticle
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
