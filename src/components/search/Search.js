import React, { Component } from "react";
import { connect } from "react-redux";
import { listPhotos } from "reducers/PhotosReducer";
import TextInput from "components/partials/TextInput";
import Pagination from "components/partials/Pagination";
import Sorting from "components/partials/Sorting";
import Placeholder from "components/search/SearchPlaceholder";
import {debounce} from "lodash";
import { Link, withRouter } from "react-router-dom";
import "assets/styles/search.css";
import Reload from "components/partials/Reload";
import { clean, restoreUrl } from "helper/ParamHelper";

// handle params
import qs from "query-string";

var url_params = ["q", "page", "sortby"];

class Search extends Component {
	constructor(props) {
		super(props);
		this.getParams = this.getParams.bind(this);
		this.state = {
			params: this.getParams()
		};

		this.updateQ = this.updateQ.bind(this);
		this.requestData = debounce(this.requestData,1000);
	}

	componentDidMount() {
		this.props.listPhotos(this.state.params);
	}

	componentDidUpdate(prevProps) {
		if (this.props.location.key !== prevProps.location.key) {
			this.onRouteChanged();
		}
	}

	onRouteChanged() {
		this.setState({params: this.getParams()});
		this.props.listPhotos(this.state.params);
	}

	getParams() {
		const { search } = this.props.location;
		const params = new URLSearchParams(search);
		return restoreUrl(url_params, params);
	}

	requestData() {
		let searchString = qs.stringify(clean(this.state.params));
		this.props.history.push("search?" + searchString);
		this.props.listPhotos(this.state.params);
	}

	updateQ(e) {
		let params = {...this.state.params, ...e};
		this.setState({params: params});
		this.requestData();
	}

	item(data) {
		return (
			<li key={data.id} className="flex-grid">
				<div className="no-img"><span>Not found</span></div>
				<img src={"https://picsum.photos/200/300/?image=" + data.id} className="col-1" alt={data.title}/>
				<div className="col-2">
					<Link to={"/article/" + data.id}>
						{ data.title }
					</Link>
					<div className="search-result__subcontent">
						<div>
							<span className="label" key="tag">test</span>
						</div>
						<br/>
						<time>4 days ago</time>
					</div>
				</div>
			</li>);
	}

	render() {

		let datas = this.props.datas;
		let params = this.state.params;
		let content;
		if (datas.length > 0) {
			content =
				<div className="search-result">
					<ul>
						{datas.map(this.item)}
					</ul>
					<Pagination name="page" page={params.page} onClick={ this.updateQ }/>
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
					<div>No Result for { params.q }</div>
				</div>;
		}

		return (
			<div className="search">
				<div className="search-filter">
					<fieldset>
						<TextInput id="q" name="q" type="text" onChange={ this.updateQ } value={params.q ? params.q : ""}/>
					</fieldset>
					<fieldset>
						<label> Sortby </label>
						<div className="search-filter__sort">
							<Sorting name="sortby" sortby="title" style={params.sortby === "title" ? "--active":""} onClick={ this.updateQ} title="A to Z"/>
							<Sorting name="sortby" sortby="id" style={!params.sortby || params.sortby === "id" ? "--active":""} onClick={ this.updateQ } title="ID"/>
						</div>
					</fieldset>
				</div>
				<Placeholder render={ this.props.progress }/>
				{ empty }
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
	return {...state.photos, datas: storedPhotos};
};

const mapDispatchToProps = {
	listPhotos
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
