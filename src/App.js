import React, { Component } from 'react';
import HomePage from './components/HomePage';
import Search from './components/Search';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/search" component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
