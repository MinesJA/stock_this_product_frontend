// REACT
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// COMPONENTS
import NavBar from './components/NavBar'
import BrandWhereToBuyContainer from './containers/customerFacing/BrandWhereToBuyContainer'
import BrandMapContainer from './containers/customerFacing/BrandMapContainer'
import MessagesReportContainer from './containers/MessagesReportContainer'
import UploadCSVContainer from './containers/UploadCSVContainer'
import SearchesReportContainer from './containers/SearchesReportContainer'
// STYLING
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route path="/wheretobuy" exact component={BrandWhereToBuyContainer} />
        <Route path="/showMap" exact component={BrandMapContainer} />
        <Route path="/messagesreport" exact component={MessagesReportContainer} />
        <Route path="/uploadcsv" exact component={UploadCSVContainer} />
        <Route path="/searchesreport" exact component={SearchesReportContainer} />
      </div>
    );
  }
}

export default App;
