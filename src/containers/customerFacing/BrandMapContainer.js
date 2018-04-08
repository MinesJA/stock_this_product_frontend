import React, { Component } from 'react'
import GoogleMap from '../../components/GoogleMap'
import { StoreList } from '../../components/StoreList'
import AreaSearchForm from '../../components/AreaSearchForm'
import HOCLoading from '../../HOC/HOCLoading'
import { connect } from 'react-redux'

class MapContainer extends Component {
  state = {
    center: {lat: null,
             lng: null},
    radius: null,
    stores: []
  }

  componentWillReceiveProps(nextProps){
    debugger;
    this.setState({
      center: {
        lat: nextProps.searchObject.lat,
        lng: nextProps.searchObject.lng
      },
      radius: nextProps.searchObject.radius,
      stores: nextProps.searchObject.selectedStores
    })

  }

  render(){
    let center = {lat: this.props.searchObject.lat, lng: this.props.searchObject.lng}
    let radius = this.props.searchObject.radius
    // Could have conditional that checks "buys" attribute of first store.
    // If buys attribute is false, then serve different map with different markers setup.
    // May be easier than dynamically rendering in GoogleMap component
    return(
      <div>
        <AreaSearchForm />
        <GoogleMap
          center={this.state.center}
          radius={this.state.radius}
          stores={this.state.stores}
        />
        <StoreList
          stores={this.state.stores}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    searchLoading: state.Searches.loading,
    searchObject: state.Searches.searchObject,
    selectedStores: state.Stores.selectedStores
  }
}

export default connect(mapStateToProps)(MapContainer)
