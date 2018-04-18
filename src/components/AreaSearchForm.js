import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Card } from 'semantic-ui-react';
import { fetchGeocode, postSearch } from '../actions/searchesActions'
import { withRouter } from 'react-router'
import loader from '../HOC/HOCLoading'

class AreaSearchForm extends Component {
  state = {
    radiusOptions: [
      {key: 5, text: "5 miles", value: 5 },
      {key: 10, text: "10 miles", value: 10 },
      {key: 20, text: "20 miles", value: 20 },
    ],
    searchTerm: "",
    radius: ""
  }

  handleChange = (e, {name, value}) => {
    this.setState({
      [name]: value
    })
  }

  submitForm = (e) => {
    e.preventDefault()

    let searchContent = {searchTerm: this.state.searchTerm, radius: this.state.radius, producer_id: this.props.selectedProducer}

    this.props.fetchGeocode(searchContent)
      .then((searchObject)=> {
        this.props.postSearch(searchObject)
      })
  }


  render(){
    return(
      <Card fluid>
        <Card.Content>
          <Card.Header>FIND PRODUCTS NEAR YOU</Card.Header>
          <Card.Meta>Enter any kind of address (zipcode, city, crossstreet) to find our products near that area</Card.Meta>
          <Card.Description>
            <Form onSubmit={this.submitForm}>
              <Form.Group>
              <Form.Input name="searchTerm" placeholder="Enter Zip Code, Address, or City..." onChange={this.handleChange} />
              <div>within...</div>
              <Form.Dropdown name="radius" placeholder="20 miles" onChange={this.handleChange} selection wrapSelection={false} options={this.state.radiusOptions} />
              <Form.Button primary>FIND PROUDCTS</Form.Button>
              </Form.Group>
            </Form>
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}


function mapStateToProps(state){
  return {
    searchObject: state.Searches.searchObject,
    selectedProducer: state.Producers.selectedProducer
  }
}


export default withRouter(connect(mapStateToProps, { fetchGeocode, postSearch })(loader(AreaSearchForm)))
