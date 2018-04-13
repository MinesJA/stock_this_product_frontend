import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Dropdown } from 'semantic-ui-react';
import { fetchGeocode, postSearchTerms } from '../actions/searchesActions'
import { fetchStores } from '../actions/storesActions'
import { selectProducer } from '../actions/producersActions'
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
    radius: "",
    producer_id: "",
  }

  renderProducerOptions = () => {
    return this.props.producers.map((producer)=>{
      return {key: producer.name, value: producer.id, text: producer.name}
    })
  }

  handleChange = (e, {name, value}) => {
    this.setState({
      [name]: value
    })
  }

  submitForm = (e) => {
    e.preventDefault()

    let searchContent = {searchTerm: this.state.searchTerm, radius: this.state.radius, producer_id: this.state.producer_id}

    this.props.fetchGeocode(searchContent)
      .then((searchObject)=> {
        console.log("SubmitForm, searchObject: ", searchObject)
        this.props.fetchStores(searchObject)
        this.props.postSearchTerms(searchObject)
        this.props.selectProducer(searchContent.producer_id)
      })
  }


  render(){
    return(
      <div>
        <div>FIND PRODUCTS NEAR YOU</div>

        <Form onSubmit={this.submitForm}>
          <Form.Group>
          <Form.Dropdown name="producer_id" placeholder="select producer" onChange={this.handleChange} selection wrapSelection={false} options={this.renderProducerOptions()} />
          <Form.Input name="searchTerm" placeholder="Enter Zip Code, Address, or City..." onChange={this.handleChange} />
          <div>within...</div>
          <Form.Dropdown name="radius" placeholder="20 miles" onChange={this.handleChange} selection wrapSelection={false} options={this.state.radiusOptions} />
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
    producers: state.Producers.producers
  }
}


export default withRouter(connect(mapStateToProps, { fetchGeocode, fetchStores, postSearchTerms, selectProducer })(loader(AreaSearchForm)))
