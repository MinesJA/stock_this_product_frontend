// REACT
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { Segment, List } from 'semantic-ui-react'
// COMPONENTS
import NavBar from './components/NavBar'
import AdminNavBar from './components/AdminNavBar'
import BrandHomeContainer from './containers/customerFacing/BrandHomeContainer'
import BrandWhereToBuyContainer from './containers/customerFacing/BrandWhereToBuyContainer'
import AdminAnalyticsContainer from './containers/adminFacing/AdminAnalyticsContainer'
import AdminSearchesContainer from './containers/adminFacing/AdminSearchesContainer'
import AdminUploadCSVContainer from './containers/adminFacing/AdminUploadCSVContainer'
import SignUpContainer from './containers/SignUpContainer'
import LoginContainer from './containers/LoginContainer'
import { getUser } from './actions/usersActions'
import { fetchProducers } from './actions/producersActions'
import { fetchSearches } from './actions/searchesActions'
import { fetchStores } from './actions/storesActions'
// STYLING
import './App.css';


class App extends Component {

  componentDidMount(){
    let jwt = localStorage.getItem("token")

    if(jwt && !this.props.currentUser){
      this.props.getUser(jwt, this.props.history)
    }

    this.props.fetchProducers()
  }

  render() {
    return (
      <div>
        { this.props.currentUser ? <AdminNavBar history={this.props.history}/> : <NavBar /> }

        <Route exact path="/" component={BrandHomeContainer} />

        <Route exact path="/wheretobuy" component={BrandWhereToBuyContainer} />

        <Route exact path="/signup" component={SignUpContainer} />
        <Route exact path="/login" component={LoginContainer} />

        <Route exact path="/searches" component={AdminSearchesContainer} />
        <Route exact path="/analytics" component={AdminAnalyticsContainer} />
        <Route path="/csvs/new" component={AdminUploadCSVContainer} />

        <Segment padded size='large' inverted>
          <List>
            <List.Item>About</List.Item>
            <List.Item>GitHub</List.Item>
            <List.Item>Something</List.Item>
          </List>
        </Segment>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.Users.currentUser,
    selectedProducer: state.Producers.selectedProducer
  }
}

export default withRouter(connect(mapStateToProps, { getUser, fetchProducers, fetchSearches, fetchStores })(App));
