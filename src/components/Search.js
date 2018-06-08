import React, { Component } from "react";
import { connect } from "react-redux";
import { listPhotos } from "../reducers/PhotosReducer";
import TextInput from "./partials/TextInput";
import Pagination from "./partials/Pagination";
import {debounce} from "lodash";
// handle params
import qs from "query-string";

var url_params = {q: "", page: 1 };

class Search extends Component {
	constructor(props) {
		super(props);
		this.getParams = this.getParams.bind(this);
		this.state = {
			init: 0,
			params: this.getParams()
		};

		this.updateQ = this.updateQ.bind(this);
		this.updatePage = this.updatePage.bind(this);
		this.requestData = debounce(this.requestData,1000);
	}

	componentDidMount() {
		this.props.listPhotos(this.state.params);
	}

	getParams() {
		const { search } = this.props.location;
		const params = new URLSearchParams(search);
		Object.keys(url_params).map(function (key) {
			let p = params.get(key);
			return url_params[key] = p ? p : "";
		});
		return url_params;
	}

	requestData() {
		let searchString = qs.stringify(this.state.params);
		this.props.history.push("search?" + searchString);
		this.props.listPhotos(this.state.params);
	}

	updateQ(e) {
		let params = this.state.params;
		params.q = e.q;
		params.page = 1;
		this.setState({params: params});
		this.requestData();
	}

	updatePage(e) {
		let params = this.state.params;
		params.page = e.page;
		this.setState({params: params});
		this.requestData();
	}

	item(data, index) {
		return <p key={index}>{data.title}</p>;
	}

	render() {

		let error_message = this.props.error;
		let content = <div>Please try again, page error.</div>;
		if (!error_message) {
			content = <React.Fragment>
				{this.props.photos.map(this.item)}
				<Pagination name="page" page={this.state.params.page} onClick={ this.updatePage }/>
			</React.Fragment>;
		}
		return (
			<div style={this.props.loading === true ? style.loading: style.loaded}>
				<br/>
				<TextInput id="q" name="q" onChange={ this.updateQ } value={this.state.params.q} />
				{ content }
			</div>
		);
	}
}

const mapStateToProps = state => {
	let storedPhotos = [];
	if (state.photos.datas.length > 0) {
		storedPhotos = state.photos.datas.map(photo => ({ key: photo.id, ...photo }));
	}
	return {
		photos: storedPhotos,
		loading: state.photos.loading,
		error: state.photos.error
	};
};

const style = {
	loading: {
		opacity: 0.2,
		background: "white"
	}
};

const mapDispatchToProps = {
	listPhotos
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
