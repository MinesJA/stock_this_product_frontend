// REACT
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// REDUX
import { connect } from 'react-redux'
// COMPONENTS
import NavBar from './components/NavBar'
import BrandWhereToBuyContainer from './containers/customerFacing/BrandWhereToBuyContainer'
import BrandShowMapContainer from './containers/customerFacing/BrandShowMapContainer'
// STYLING
import './App.css';


class App extends Component {
  render() {

    return (
      <div>
        <NavBar />
        <Route path="/wheretobuy" exact component={BrandWhereToBuyContainer} render />
        <Route path="/showMap" exact component={BrandShowMapContainer} render />
      </div>
    );
  }
}

export default App;
