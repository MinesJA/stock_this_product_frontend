import React, { Component } from 'react';
import { connect } from 'react-redux';
// COMPONENTS
import AreaSearchForm from '../../components/AreaSearchForm';
import ProductsList from '../../components/ProductsList'
import GoogleMap from '../../components/GoogleMap'
import StoreList from '../../components/StoreList'
import AlertModal from '../../components/AlertModal'
import EmailModal from '../../components/EmailModal'

import { fetchProducers } from '../../actions/producersActions'
import loader from '../../HOC/HOCLoading'
import { Grid, Icon, Header, Segment, Image, Container } from 'semantic-ui-react'

class BrandWhereToBuyContainer extends Component {
  state = {
    modalOpen: false,
    emailModalOpen: false
  }

  renderModal = () => {
    if(this.props.selectedStores.length > 0 && !this.props.searchObject.buys){
      return <AlertModal />
    }
  }

  renderEmailModal = () => {
    if(this.props.messageStore){
      return <EmailModal />
    }
  }

  renderCenter = () => {
    if(this.props.searchObject.lat){
      return {lat: this.props.searchObject.lat, lng: this.props.searchObject.lng}
    } else {
      return {lat: 40.7128, lng: -74.0060}
    }
  }



  render() {
    let producer = this.props.producers.find( producer => producer.id === this.props.selectedProducer )
    let radius = this.props.searchObject.radius

    return (
      <Grid columns={2} divided>
        {this.renderModal()}
        {this.renderEmailModal()}
        <Grid.Row>
          <Grid.Column width={10}>
            <AreaSearchForm />
            <GoogleMap
              center={this.renderCenter()}
              radius={radius}
              stores={this.props.selectedStores}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <StoreList
              stores={this.props.selectedStores}
              searchObject={this.props.searchObject}
            />
          </Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }
}

function mapStateToProps (state) {
  return {
    searchObject: state.Searches.searchObject,
    selectedProducer: state.Producers.selectedProducer,
    producers: state.Producers.producers,
    loading: state.Producers.producersLoading,
    selectedStores: state.Stores.selectedStores,
    messageStore: state.Stores.messageStore,
    loading: state.Stores.storesLoading || state.Searches.searchesLoading
  }
}

export default connect(mapStateToProps, { fetchProducers })(loader(BrandWhereToBuyContainer));
