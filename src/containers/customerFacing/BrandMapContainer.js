import React, { Component } from 'react'
import GoogleMap from '../../components/GoogleMap'
import { StoreList } from '../../components/StoreList'
import AreaSearchForm from '../../components/AreaSearchForm'
import HOCLoading from '../../HOC/HOCLoading'
import { connect } from 'react-redux'

class MapContainer extends Component {

  render(){
    let center = {lat: this.props.searchTerms.latitude, lng: this.props.searchTerms.longitude}
    let radius = this.props.searchTerms.radius
    return(
      <div>
        <AreaSearchForm />
        <GoogleMap
          center={center}
          radius={radius}
          stores={this.props.selectedStores}
        />
        <StoreList
          stores={this.props.selectedStores}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    searchLoading: state.Searches.loading,
    searchTerms: state.Searches.search_terms,
    selectedStores: state.Stores.selectedStores
  }
}

export default connect(mapStateToProps)(MapContainer)
