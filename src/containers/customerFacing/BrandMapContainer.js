import React, { Component } from 'react'
import { connect } from 'react-redux'
// HOC
import loader from '../../HOC/HOCLoading'
// STYLING
import { Grid } from 'semantic-ui-react'
// COMPONENTS
import GoogleMap from '../../components/GoogleMap'
import StoreList from '../../components/StoreList'
import AlertModal from '../../components/AlertModal'
import EmailModal from '../../components/EmailModal'

class MapContainer extends Component {
  state = {
    modalOpen: false,
    emailModalOpen: false
  }

  renderModal = () => {
    if(this.props.selectedStores.length > 0 && !this.props.selectedStores[0].buys){
      return <AlertModal />
    }
  }

  renderEmailModal = () => {
    if(this.props.messageStore){
      return <EmailModal />
    }
  }


  render(){
    let center = {lat: this.props.searchObject.lat, lng: this.props.searchObject.lng}
    let radius = this.props.searchObject.radius
    return(
      <div>
        {this.renderModal()}
        {this.renderEmailModal()}

        <Grid celled>
          <Grid.Row>
            <Grid.Column width={11}>
              <GoogleMap
                center={center}
                radius={radius}
                stores={this.props.selectedStores}
              />
            </Grid.Column>
            <Grid.Column width={5}>
              <StoreList
                stores={this.props.selectedStores}
                searchObject={this.props.searchObject}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    searchLoading: state.Searches.searchesloading,
    storesLoading: state.Stores.storesLoading,
    searchObject: state.Searches.searchObject,
    selectedStores: state.Stores.selectedStores,
    messageStore: state.Stores.messageStore
  }
}

export default connect(mapStateToProps)(loader(MapContainer))
