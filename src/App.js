// REACT
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// COMPONENTS
import NavBar from './components/NavBar'
import BrandWhereToBuyContainer from './containers/customerFacing/BrandWhereToBuyContainer'
import BrandShowMapContainer from './containers/customerFacing/BrandShowMapContainer'
import AdminContainer from './containers/AdminContainer'
// STYLING
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route path="/wheretobuy" exact component={BrandWhereToBuyContainer} />
        <Route path="/showMap" exact component={BrandShowMapContainer} />
        <Route path="/admin" exact component={AdminContainer} />
      </div>
    );
  }
}

export default App;
