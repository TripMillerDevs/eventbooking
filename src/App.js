import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './components/Regsiter'
import LandPage from './components/LandPage'

import "./app.styles.scss";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <LandPage/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
