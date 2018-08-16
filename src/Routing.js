import React, { Component } from "react";
import Nav from "components/Nav";
import "assets/styles/header.css";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
// asyncComponent
import asyncComponent from "./components/AsyncComponent";
const Search = asyncComponent(() => import("components/search/Search"));
const Article = asyncComponent(() => import("components/search/Article"));
const HomePage = asyncComponent(() => import("components/HomePage"));

const history = createBrowserHistory();

class Routing extends Component {
	render() {
		return (
			<Router history={history}>
				<React.Fragment>
					<Nav/>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/search" component={Search} />
						<Route path="/article/:id" component={Article}/>
					</Switch>
				</React.Fragment>
			</Router>
		);
	}
}

export default Routing;
