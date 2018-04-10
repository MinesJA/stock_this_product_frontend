// REACT
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
// COMPONENTS
import NavBar from './components/NavBar'
import AdminNavBar from './components/AdminNavBar'
import BrandWhereToBuyContainer from './containers/customerFacing/BrandWhereToBuyContainer'
import MessagesReportContainer from './containers/MessagesReportContainer'
import UploadCSVContainer from './containers/UploadCSVContainer'
import SearchesReportContainer from './containers/SearchesReportContainer'
import SignUpContainer from './containers/SignUpContainer'
import LoginContainer from './containers/LoginContainer'
// STYLING
import './App.css';


class App extends Component {

  componentDidMount(){
    let jwt = localStore.getItem("token")

    if(jwt && !this.props.currentUser){
      currentUser.
    }
  }

  render() {
    return (
      <div>
        { this.props.currentUser ? <AdminNavBar /> : <NavBar /> }

        <Route path="/signup" exact component={SignUpContainer} />
        <Route path="/login" exact component={LoginContainer} />

        <Route path="/wheretobuy" exact component={BrandWhereToBuyContainer} />

        <Route path="/uploadcsv" exact component={UploadCSVContainer} />
        <Route path="/messagesreport" exact component={MessagesReportContainer} />
        <Route path="/searchesreport" exact component={SearchesReportContainer} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.Users.currentUser
  }
}

export default withRouter(connect(mapStateToProps)(App));
