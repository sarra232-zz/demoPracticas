/*jshint esversion: 6 */
import React, {Fragment} from 'react';
import SearchSingle from './pages/searchSingle/searchSingle';
import SearchGroup from './pages/searchGroup/searchGroup';
import Navbar from '../src/components/commons/navbar/Nabvar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './pages/homePage/homePage';
import './App.css';

class App extends React.Component {
  render() {
    const {location} = this.props;
    return (
      <Fragment>
        <Navbar></Navbar>
        <BrowserRouter>
          <Switch>
            <Route location={location} path="/" exact component={HomePage} />
            <Route
              location={location}
              path="/demo/fingerprint"
              exact
              component={SearchSingle}
            />
            <Route
              location={location}
              path="/demo/segment"
              exact
              component={SearchGroup}
            />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
