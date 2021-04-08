import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './components/Regsiter'
import Landing from './components/Landing'

import "./app.styles.scss";

class App extends React.Component {
  render() {
    return (
      <Router>
        <switch>
          <Route path="/">
            <Landing/>
          </Route>
        </switch>
        <switch>
          <Route path="/Register">
            <Register/>
          </Route>
        </switch>
      </Router>
    );
  }
}
export default App;
