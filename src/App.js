import React, { Component } from 'react';
import HomePage from './components/HomePage';
import PageTwo from './components/PageTwo';
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
            <li><Link to="/pagetwo/508888">Page Two</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/pagetwo/:number" component={PageTwo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
