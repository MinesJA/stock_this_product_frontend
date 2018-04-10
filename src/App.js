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
import { getUser } from './actions/usersActions'
import loader from './HOC/HOCLoading'
// STYLING
import './App.css';


class App extends Component {

  componentDidMount(){
    let jwt = localStorage.getItem("token")

    if(jwt && !this.props.currentUser){
      this.props.getUser(jwt, this.props.history)
    }
  }

  render() {
    return (
      <div>
        { this.props.currentUser ? <AdminNavBar /> : <NavBar /> }

        <Route path="/signup" exact component={SignUpContainer} />
        <Route path="/login" exact component={LoginContainer} />

        <Route path="/wheretobuy" exact component={BrandWhereToBuyContainer} />

        <Route path="/csvs" exact component={UploadCSVContainer} />
        <Route path="/messages" exact component={MessagesReportContainer} />
        <Route path="/searches" exact component={SearchesReportContainer} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.Users.currentUser
  }
}

export default withRouter(connect(mapStateToProps, { getUser })(loader(App)));
