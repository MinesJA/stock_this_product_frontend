import React, { Component } from 'react';
import { connect } from 'react-redux';
// COMPONENTS
import AreaSearchForm from '../../components/AreaSearchForm';
import ProductsList from '../../components/ProductsList'
import BrandMapContainer from './BrandMapContainer';
import {fetchProducers } from '../../actions/producersActions'
import loader from '../../HOC/HOCLoading'

class BrandWhereToBuyContainer extends Component {


  render() {
    let producer = this.props.producers.find( producer => producer.id === this.props.selectedProducer )

    return (
      <div>
        <AreaSearchForm />
        { this.props.searchObject.lat > 0 ? <BrandMapContainer /> : null }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    searchObject: state.Searches.searchObject,
    selectedProducer: state.Producers.selectedProducer,
    producers: state.Producers.producers,
    loading: state.Producers.producersLoading
  }
}

export default connect(mapStateToProps, { fetchProducers })(loader(BrandWhereToBuyContainer));
