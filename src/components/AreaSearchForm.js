import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { fetchGeocode } from '../actions/searchesActions'
import { fetchStores } from '../actions/storesActions'
import { withRouter } from 'react-router'
import loader from '../HOC/HOCLoading'

class AreaSearchForm extends Component {
    state = {
      options: [
        {key: 5, text: "5 miles", value: 5 },
        {key: 10, text: "10 miles", value: 10 },
        {key: 20, text: "20 miles", value: 20 },
      ],
      location: "",
      radius: "",
      center: this.props.center
    }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  dropDownChange = (e, { value }) => {
    this.setState({
      radius: value
    })
  }

  submitForm = (e) => {
    e.preventDefault()
    let searchTerms = {location: this.state.location, radius: this.state.radius}

    this.props.fetchGeocode(searchTerms)
      .then((searchObject)=> {
        this.props.fetchStores(searchObject)
      })
    // this.props.history.push("/showMap")
  }

  render(){
    return(
      <div>
        <div>FIND PRODUCTS NEAR YOU</div>

        <Form onSubmit={this.submitForm}>
          <Form.Group>
          <Form.Input onChange={this.handleChange} name="location" placeholder="Enter Zip Code, Address, or City..." />
          <div>within...</div>
          <Form.Dropdown onChange={this.dropDownChange} name="radius" placeholder='20 miles' wrapSelection={false} options={this.state.options} />
          <Form.Button primary>FIND PROUDCTS</Form.Button>
          </Form.Group>
        </Form>

        <div> Choose specific products youre looking for below... </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    searchObject: state.Searches.searchObject,
    loading: state.Searches.searchesLoading && state.Stores.storesLoading,
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchGeocode: (searchTerms) => {
      return dispatch(fetchGeocode(searchTerms))
    },
    fetchStores: (searchObject) => {
      dispatch(fetchStores(searchObject))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(loader(AreaSearchForm)))
