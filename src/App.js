import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './components/Regsiter'
import LandPage from './components/LandPage'
import EventList from './components/EventList'
import Header from './components/core/Header'
import Footer from './components/core/Footer'
import "./app.styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header/>
        <div className="page-section">
          <Switch>
            <Route path="/list">
              <EventList />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <LandPage />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    );
  }
}
export default App;
