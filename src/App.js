// REACT
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
// COMPONENTS
import NavBar from './components/NavBar'
import AdminNavBar from './components/AdminNavBar'
import BrandWhereToBuyContainer from './containers/customerFacing/BrandWhereToBuyContainer'
import AnalyticsContainer from './containers/AnalyticsContainer'
import UploadCSVContainer from './containers/UploadCSVContainer'
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
        <Route path="/analytics" exact component={AnalyticsContainer} />




        <Route path="/producer/:id" exact component={BrandHomeContainer} >
          <Route path="/producer/:id/products" exact component={BrandProductsContainer} />
          <Route path="/producer/:id/wheretobuy" exact component={BrandWhereToBuyContainer} />
          <Route path="/producer/:id/about" exact component={BrandAboutContainer} />

          <Route path="/producer/:id/signup" exact component={SignUpContainer} />
          <Route path="/producer/:id/login" exact component={LoginContainer} />

          <Route path="/producer/:id/user/:id" exact component={AdminHomeContainer} >
            <Route path="/producer/:id/user/:id/analytics" exact component={AnalyticsContainer} />
            <Route path="/producer/:id/user/:id/messages" exact component={AnalyticsContainer} />
            <Route path="/producer/:id/user/:id/searches" exact component={AnalyticsContainer} />

            <Route path="/producer/:id/user/:id/csv" exact component={UploadCSVContainer} />
              <Route path="/producer/:id/user/:id/csv/new" exact component={UploadCSVContainer} />
              <Route path="/producer/:id/user/:id/csv/:id" exact component={CSVShowContainer} />
            </Route>
          </Route>

        </Route>


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
