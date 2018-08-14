import React, { Component } from "react";
import HomePage from "components/HomePage";
import Search from "components/search/Search";
import Article from "components/search/Article";
import Nav from "components/Nav";
import "assets/styles/header.css";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

class App extends Component {
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

export default App;
